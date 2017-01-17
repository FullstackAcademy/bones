import React, { Component } from 'react';

import NavbarContainer from './navbar/NavbarContainer';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        { this.props.children }

      </div>
    );
  }
}

export default App;
