import React from 'react';
import { connect } from 'react-redux';
import AllRocks from './AllRocks';

const mapStateToProps = ({ rocks }) => ({ rocks });

export default connect (mapStateToProps)(AllRocks);