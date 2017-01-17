import {login, logout, signup} from 'APP/app/reducers/auth';
import {connect} from 'react-redux';

import Login from './Login';

const mapStateToProps = ({loggedInUser}) => ({loggedInUser});

const mapDispatchToProps = (dispatch) => {
  return {
    login: function(email, password) {
      dispatch(login(email, password));
    },
    logout: function() {
      dispatch(logout());
    },
    signup: function(firstName, lastName, email, password) {
      dispatch(signup(firstName, lastName, email, password));
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
