import { connect } from 'react-redux';

import UserInfoComponent from './UserInfo';
import {
  handleExpand,
  handleToggle,
  handleReduce,
  updateUserInfo,
  handleExpandChange
} from '../../reducers/userInfoReducer';

const mapStateToProps = ({ userInfo }) => ({ userInfo });

const mapDispatchToProps = (dispatch) => ({
  handleExpand: () =>
    dispatch(handleExpand()),
  handleToggle: (event, toggle) =>
    dispatch(handleToggle(event, toggle)),
  handleReduce: () => {
    dispatch(handleReduce());
  },
  handleExpandChange: (expanded) =>
    dispatch(handleExpandChange(expanded)),
  handleUpdateUserInfo: (updatedUserInfo) =>
    dispatch(updateUserInfo(updatedUserInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoComponent);
