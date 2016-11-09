import React, {Component} from 'react'
import store from '../store';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500, blue500} from 'material-ui/styles/colors';
const Divstyle ={
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
}
const style = {
  margin: 12,
  color:blue500
};
const Textstyles = {
  paddingLeft:'10px',
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};
export class User extends Component {

  constructor() {
    super()
    //this.state = store.getState();
    //fake state;

    this.update = this.update.bind(this);
    this.login = this.login.bind(this);
    this.authenticate = this.authenticate.bind(this);

  }
  componentWillMount () {
      store.subscribe(() => this.setState(store.getState()));

  }
  update( firstName, lastName, username, email, password){

    console.log("auth", this.state.auth.password_digest);
    var password_digest = this.state.auth.password_digest;

    var id = this.state.auth.id;
    var user = {firstName: firstName,
                lastName: lastName,
                username: username,
                email: email
              }
    var url = `/api/users/${id}`;
    console.log("url", url);
    axios.put(url,user)
    .then(function(res){
      console.log("RES",res);
      if(res.status ==200){
        //location.reload();
        //console.log("Success!!");
      }
    })
    .catch(function (err) {
      console.error("ERR",err)
    });

  }
  //fake login testing

  authenticate(plaintext) {
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) =>
            err ? reject(err) : resolve(result))
        )
  }

  login( ){
    console.log("login");
    const body = {username:"barack@president.rocks", password:"1234"}
    axios.post('/api/auth/local/login', body)
    .then(function(res){
      console.log("response", res);
    })

  }

  render() {
  return (
    <div style={Divstyle}>
      {this.state.auth?
      <form  onSubmit = {evt=>{ evt.preventDefault(); this.update(evt.target.firstname.value, evt.target.lastname.value, evt.target.username.value, evt.target.email.value, evt.target.password.value);}}>
        <p>First Name:<TextField defaultValue = {this.state.auth.firstName} name="firstname" style={Textstyles}/></p>
        <p>Last Name: <TextField  defaultValue = {this.state.auth.lastName} name="lastname"  style={Textstyles}/></p>
        <p>Username: <TextField  defaultValue = {this.state.auth.username} name="username"  style={Textstyles}/></p>
        <p>Eamil: <TextField  defaultValue = {this.state.auth.email} name="email"  style={Textstyles}/></p>
        <p>Password: <TextField  defaultValue = "fakepassword" name="password" type = "password"  style={Textstyles}/></p>
        <RaisedButton type="submit" label="UPDATE" primary={true} style={style} />
      </form>
      :
      <form  onSubmit = {evt=>{ evt.preventDefault(); this.login();}}>
        <RaisedButton type="submit" label="FAKE LOGIN" primary={true} style={style} />
      </form>
      }
    </div>


)}

}

import {connect} from 'react-redux'
const mapStateToProps = ({auth, user}) => ({
  auth, user
})
export default connect (
  mapStateToProps,
  null,
) (User)

