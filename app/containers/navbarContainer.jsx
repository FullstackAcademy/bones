import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { logout } from '../reducers/auth';
import {dumpCartItems} from '../action-creators/Cart'

const mapStateToProps = (state, ownProps) => {
  return { auth: state.auth ,
    order: state.Session.order};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onLogout: () => dispatch(logout()),
    dumpCartItems: (orderId)=> {dispatch(orderId)}} ;
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
