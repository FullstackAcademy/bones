import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';

const mapStateToProps = ({cartProducts}) => ({cartProducts});

export default connect(mapStateToProps)(Cart);
