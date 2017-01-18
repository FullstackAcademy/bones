import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default function() {
		return (
      <div id="main">
        <div className="parallax-container">
          <div className="parallax"><img src="images/parallax1.jpg" /></div>
        </div>
        <div className="section white">
          <div className="row container">
            <h3 className="subhead">Thanks for your purchase!</h3>
            <p className="grey-text text-darken-3 lighten-3">Check your inbox for your receipt, and please leave a review.</p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax"><img src="images/parallax2.jpg" /></div>
        </div>
      </div>
		)
}
