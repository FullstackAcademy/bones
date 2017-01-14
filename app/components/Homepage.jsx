'use strict'

import React from 'react'
import {Link} from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

export default () => {
  return (
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col md={12} className="home-pic promo">
                <Row className="show-grid">
                  <Col md={9}>
                    <h1 id="promo">TAKE 40% OFF EVERYTHING</h1>
                  </Col>
                  <Col md={3}>
                    <h1 id="promoCode">Promo Code: TAKE40</h1>
                  </Col>
                </Row>
                <Row className="show-grid bottomRow">
                  <Col md={6}>
                      <h1 id="peopleSale">SHOP PEOPLE</h1>
                  </Col>
                  <Link to={'/sale/dog'}>
                    <Col md={6}>
                        <h1 id="dogSale">SHOP DOG</h1>
                    </Col>
                  </Link>
                </Row>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={6}>
            <Link to={ '/products/women'}>
              <div className="home-pic women">
                <h1>Women</h1>
              </div>
            </Link>
          </Col>
          <Col md={6}>
            <Link to={ '/products/men'}>
              <div className="home-pic men">
                <h1>Men</h1>
              </div>
            </Link>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={12}>
            <Link to={ '/products/dogs'}>
              <div className="home-pic dogs">
                <h1>Dogs</h1>
              </div>
            </Link>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={12}>
            <Link to={ '/products/kids'}>
              <div className="home-pic kids">
                <h1>Kids</h1>
              </div>
            </Link>
          </Col>
        </Row>
      </Grid>
  );
}
