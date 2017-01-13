// import {login} from 'APP/app/reducers/auth';
import {login, logout} from 'APP/app/reducers/auth';
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
