import { connect } from 'react-redux';
import { logout } from 'APP/app/reducers/auth';

import Navbar from './Navbar';


const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => ({
  logout: () =>
    dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
