import { connect } from 'react-redux';
import PaintCatalog from '../components/PaintCatalog';
// import {loadProducts} from '../action-creators/Catalog'

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	// onLoadProducts: function() {
  	// 	dispatch(loadProducts())
  	// }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaintCatalog);
