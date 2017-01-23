import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  const products = props.products;

  return (
    <div>
      <h3>Products</h3>
      <div className="row">
        {
          products && products.map(product => (
            <div className="col-xs-4" key={ product.id }>
              <h5>{ product.name }</h5>
              <Link className="thumbnail">
                <img src={ product.photoURL }/>
              </Link>
              <div className="caption">
                <span>{ product.description} </span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};