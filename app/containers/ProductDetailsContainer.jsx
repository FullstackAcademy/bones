import { connect } from 'react-redux';
import ProductDetails from '../components/ProductDetails';
import {addToCart} from '../action-creators/Cart'

const mapStateToProps = (state, ownProps) => {
  const newState = Object.assign(state, {productId : ownProps.params.productId})
  return newState;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (userId, order, productId) => dispatch(addToCart(userId, order, productId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);