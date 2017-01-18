import { connect } from 'react-redux';
import MyCart from '../components/MyCart';
import {addToCart, deleteFromCart} from '../action-creators/Cart';

const mapStateToProps = (state, ownProps) => {
  return {
	cart: state.Session.order,
	state: state
};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
      addToCart: (userId, order, productId) => dispatch(addToCart(userId, order, productId)),
	  deleteFromCart: (lineItemId) => dispatch(deleteFromCart(lineItemId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
