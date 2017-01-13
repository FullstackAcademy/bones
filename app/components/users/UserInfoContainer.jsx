import { connect } from 'react-redux';

import UserInfoComponent from './UserInfo';
import {
  handleExpand,
  handleToggle,
  handleReduce,
  handleExpandChange
} from '../../reducers/userInfoReducer';

const mapStateToProps = ({ userInfo }) => ({ userInfo });

const mapDispatchToProps = (dispatch) => ({
  handleExpand: () =>
    dispatch(handleExpand()),
  handleToggle: (event, toggle) =>
    dispatch(handleToggle(event, toggle)),
  handleReduce: () =>
    dispatch(handleReduce()),
  handleExpandChange: (expanded) =>
    dispatch(handleExpandChange(expanded))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoComponent);
