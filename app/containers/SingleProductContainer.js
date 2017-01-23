import React from 'react';
import {connect} from 'react-redux';

const Product = ({product}) => {
  return (
    <div className="row">
      <div className="col-md-2">

      </div>
      <div className="col-md-8">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default connect(state => ({product: state.singleProduct}))(Product);