import React from 'react';
import { connect } from 'react-redux';
import Rock from './Rock';

const mapStateToProps = ({rock}) => ({rock});

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps)(Rock);
