import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { logout } from '../reducers/auth';

const mapStateToProps = (state, ownProps) => {
  return { auth: state.auth };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onLogout: () => dispatch(logout())} ;
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
