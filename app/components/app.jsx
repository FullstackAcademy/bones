import React, {Component} from 'react'
import Navbar from '../components/Navbar'

export default function (props) {
  return (
    <div id="main">
    <Navbar />
      <div className="parallax-container">
        <div className="parallax"><img src="images/parallax1.jpg" /></div>
      </div>
      <div className="section white">
        <div className="row container">
          <h2 className="header">Parallax</h2>
          <p className="grey-text text-darken-3 lighten-3">Insert pic or other stuff here</p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax"><img src="images/parallax2.jpg" /></div>
      </div>

      {/* Include a container */}
    </div>
  );
}

