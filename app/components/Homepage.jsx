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
              <h1>Promo</h1>
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
