import { connect } from 'react-redux';
import Accessories from '../components/Accessories';

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Accessories);
