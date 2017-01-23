import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

export default props => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        {props.children || <Home/>}
      </div>
    </div>
  );
}