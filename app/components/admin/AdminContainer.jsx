import React from 'react';
import { connect } from 'react-redux';
import Admin from './Admin';
import {editUserBasicThunk, editUserAddressThunk} from '../../reducers/admin';

const mapStateToProps = ({users}) => ({users});

const mapDispatchToProps = (dispatch) => ({
  editUser: function(id, firstName, lastName, email) {
    dispatch(editUserBasicThunk(id, firstName, lastName, email));
  },

  editAddress: function(id, street, city, state, zipcode) {
    dispatch(editUserAddressThunk(id, street, city, state, zipcode));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
