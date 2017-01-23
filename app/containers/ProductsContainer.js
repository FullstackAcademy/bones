import Products from '../components/Products';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    products: state.products.list
  };
};

export default connect(
  mapStateToProps
)(Products);