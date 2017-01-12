import React, {Component} from 'react'
import Navbar from '../components/Navbar'

export default function (props) {
  return (
    <div id="main" className="container-fluid">
      <div className="col-xs-10">
        <Navbar />
      </div>
      <div className="col-xs-10">
      </div>
      {/* Include a container */}
    </div>
  );
}