import AllProducts from '../components/MultipleProducts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    products: state.products.list
  };
};

export default connect(
  mapStateToProps
)(AllProducts);
