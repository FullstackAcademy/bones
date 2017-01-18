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
            <h2 className="title">The most vibrant paint colors and accessories</h2>

            <h4 className="subhead">At the best prices </h4>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax"><img src="images/parallax2.jpg" /></div>
        </div>
      </div>
		)
}
