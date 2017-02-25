'use strict'

import React, {Component} from 'react'
import {connect} from 'react-redux'

import Navbar from './Navbar'
import Homepage from './Homepage'

export default (props) => {
  return (
    <div>
      <div className="nav-bar">
        <Navbar />
      </div>
      <div>
        <Homepage />
        {/*
          props.children && React.cloneElement(props.children, props)
        */}
      </div>
    </div>
  )
}

