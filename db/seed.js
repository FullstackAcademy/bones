const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {firstName: 'so many', lastName: 'yo', email: 'god@example.com', phoneNumber:"12345678", password: '1234'},
  {firstName: 'Barack', lastName: 'Obama', email: 'bamad@example.com', phoneNumber:"1223425678", password: '123434'},
], user => db.model('users').create(user))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
