import React from 'react';

export default function (props) {

  const product = props.selectedProduct;

  return (
    <div className="product">
      <div>
        <h3>{ product.name }</h3>
        <img src={ product.imageUrl } className="img-thumbnail"/>
      </div>
    </div>
  );
}
export default function (props) {

  const product = props.selectedProducts;

  return (
    <div className="product">
      <div>
        <h3>{ product.name }</h3>
        <img src={ product.imageUrl } className="img-thumbnail"/>
      </div>
    </div>
  );
}