'use strict'

import React, { Component } from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Chip from 'material-ui/Chip';
import store from '../store';
import axios from 'axios';
import {updateCartId} from '../reducers/cart'



export class Celebs extends React.Component {

  render() {
    const { celebs } = this.props || []
    let idx = 0;
    return (
      <div id="celebs">
        <div className='mdl-grid'>
          <h2 className='mdl-cell mdl-cell--12-col'>Celebrities</h2>
          {celebs && celebs.map(celeb => (
              <div key={celeb.id} className="mdl-card mdl-cell mdl-cell--4-col mdl-shadow--2dp">

                  <div className="mdl-card__media">
                    <img src={celeb.photoURL}/>
                  </div>
                  <div className="mdl-card__title">
                  <Link to={`/celebs/${celeb.id}`}>
                    <span>{celeb.name}</span>
                  </Link>
                  </div>
                  <div className="mdl-card__supporting-text">
                  Type: {celeb.celebType}<br/>
                  Status: {celeb.alive ? 'Alive' : 'Deceased'}
                  </div>

              </div>
            ))
          }
        </div>
     </div>
    )
  }
}

const mapStateToProps = (state) => ({
  celebs: state.celebs
 })


export default connect(mapStateToProps)(Celebs);
