import { connect } from 'react-redux';
import Catalog from '../components/Catalog';
import {addToCart} from '../action-creators/Cart'

const mapStateToProps = (state, ownProps) => {
  const newState = Object.assign(state, {category : ownProps.params.categoryName})
  return newState;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (userId, order, productId) => dispatch(addToCart(userId, order, productId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
