import { connect } from 'react-redux';
import MyCart from '../components/MyCart';



//let lineItems = this.state.Session.order;

const mapStateToProps = (state, ownProps) => {
  return {
	cart: state.Session.order,
 	lineItems: state.Session.lineItems};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { } ;
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
