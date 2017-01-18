import { connect } from 'react-redux';
import MyCart from '../components/MyCart';



const mapStateToProps = (state, ownProps) => {
  return { cart: state.Session.order };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { } ;
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
