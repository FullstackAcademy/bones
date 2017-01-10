'use strict'

import React from 'react'

export default props => {
  return (
    <div className="container-fluid" >
      <div className="row">
        <div className="col-md-12" className="home-pic promo">
          <h1>Promo</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" className="home-pic women">
          <h1>Women</h1>
        </div>
        <div className="col-md-6" className="home-pic men">
          <h1>Men</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12" className="home-pic dogs">
          <h1>Dogs</h1>
        </div>
      </div>
    </div>
  );
}
