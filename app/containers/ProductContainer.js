import Product from '../components/Product';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    list: state.list,
    selected: state.selected
  };
};

export default connect(mapStateToProps)(Product);