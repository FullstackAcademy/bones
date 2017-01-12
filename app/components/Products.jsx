import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  const products = props.products;

  return (
    <div>
      <h3>Products</h3>
      <div className="row">
        {
          products && products.map(album => (
            <div className="col-xs-4" key={ product.id }>
              <Link className="thumbnail" to={`/products/${proudct.id}`}>
                <img src={ product.imageUrl }/>
                <div className="caption">
                  <h5>
                    <span>{ product.name }</span>
                  </h5>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};
