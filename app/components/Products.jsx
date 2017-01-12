import React from 'react';
import {Link} from 'react-router';

import Sidebar from './Sidebar';

import { Grid, Row, Col } from 'react-bootstrap';

export default props => {

  return (
    <Grid fluid={true}>
      <Col md={3}>
        <Sidebar />
      </Col>
      <Col md={9}>
        <h3>Products</h3>
        <div className="row">
          {
            props.products.map(product => (
              <div className="col-xs-4" key={ product.id }>
                <Link className="thumbnail" to={`/products/${product.id}`}>
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
      </Col>
    </Grid>
  );
};
