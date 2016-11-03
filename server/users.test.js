const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const User = require('APP/db/models/user');
const app = require('./start');

xdescribe('/users', () => {
  const users = [
          {   email:"alice@secrets.org",
              firstName: 'alice',
              lastName: 'wonderland',
              username:'alice@secrets.org',
              password:"12345",
              isAdmin:true

          },
          {
              email:"alice2@secrets.org",
              firstName: 'alice2',
              lastName: 'wonderland2',
              username:'alice2@secrets.org',
              password:"12345"

          }
  ]
  const [user1, user2] = users;
  const tmpuser = {username: user1.username, password: user1.password};
  
  let alice, alice2
  const agent = request.agent(app)
  before('sync database & make users', () =>
    db.didSync
    .then(function(){
       return db.sync({force:true})
    })
    .then(() => User.destroy({where:{}}))
    .then(() => db.Promise.map(users,
      user => User.create(user)
    ))
    .then(function(users){
      console.log("Users", users);
      [alice, alice2] = users
    })
    .then(() => agent
    .post('/api/auth/local/login')
    .send(tmpuser)
    .expect(302))
    )



  it('GET / lists all users', () =>
    request(app)
      .get('/api/users')
      .expect(200)
      .then(res => {
        //console.log(res);
        expect(res.body).to.have.length(users.length)
        const [
          user1,
          user2 ] = res.body
        expect(user1).to.contain.all.keys(['firstName', 'lastName', 'username', 'isAdmin' ])
        expect(user2).to.contain.all.keys(['firstName', 'lastName', 'username', 'isAdmin' ])
      })
  )

  it('POST / creates a user', () =>
      request(app)
        .post('/api/users')
        .send({
            email: 'test3@gmail.com',
            firstName: 'haha',
            lastName: 'hoho',
        })
       .expect(201)
  )



  it('auth user get single user', () =>
        agent.get('/api/users/`${alice2.id}')
          .set('Accept', 'application/json')
          .expect(200)
          .then(
            function(res){
                //console.log("res", res.body);
                expect(res.body).to.be.an('object');
                expect(res.body.email).to.equal(alice2.email)
            }
            )
      )

  it('put /:userId updates a user', () =>
      agent
        .put('/api/users/3')
        .send({
          lastName: "new name"
        })
        .expect(200)
        .then( () =>
          User.findById(3)
          .then(review => {
            expect(review).to.be.an('object')
            expect(review.lastName).to.equal("new name")
          })
              )
  )

  it('DELETE /:userId removes a user', () =>

        agent
        .delete('/api/users/2')
        .expect(200)
        .then(() => {
          User.findById(2)
          .then(user => {
            expect(user).to.be.null;
          })
        })
  )




})