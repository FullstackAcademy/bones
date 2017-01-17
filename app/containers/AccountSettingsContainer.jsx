import { connect } from 'react-redux';
import {AccountSettings} from '../components/AccountSettings';
import { updateUser } from '../reducers/auth';

const mapStateToProps = (state, ownProps) => {
  return { auth: state.auth };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { updateUser: (user) => dispatch( updateUser(user) )} ;
};

//this is breaking the site
export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
