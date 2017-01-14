import { connect } from 'react-redux';
import Catalog from '../components/Catalog';

const mapStateToProps = (state, ownProps) => {
  const newState = Object.assign(state, {category : ownProps.params.categoryName})
  return newState;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
