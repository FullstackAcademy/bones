'use strict'

import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <div>
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col md={12}>
            <div className="home-pic promo">
              <Grid fluid={true}>
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
                    <div>
                      <h1 id="peopleSale">SHOP PEOPLE</h1>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div>
                      <h1 id="dogSale">SHOP DOG</h1>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={6}>
            <div className="home-pic women">
              <h1>Women</h1>
            </div>
          </Col>
          <Col md={6}>
            <div className="home-pic men">
              <h1>Men</h1>
            </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={12}>
            <div className="home-pic dogs">
              <h1>Dogs</h1>
            </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={12}>
            <div className="home-pic kids">
              <h1>Kids</h1>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
