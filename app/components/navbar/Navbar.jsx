import React, { Component } from 'react';
import { AppBar, FlatButton, Toolbar, ToolbarGroup, TextField, ToolbarTitle, FontIcon, Popover, Menu, MenuItem } from 'material-ui';
import NavbarMenu from './NavbarMenu';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
        <Toolbar style={{backgroundColor:'#020202'}}>
          <ToolbarGroup>
            <i className="material-icons" style={{color:'white'}}>shop</i>

            <FontIcon color='white'>Rockstarz </FontIcon>
              <ToolbarGroup>
                <Link to={'/rocks/1'}><FlatButton label="Companion" style={{color:'white'}}>
                </FlatButton></Link>
                <FlatButton label="Utility" style={{color:'white'}} />
                <FlatButton label="Decorative" style={{color:'white'}} />
                <FlatButton label="Miscellaneous" style={{color:'white'}} />
              </ToolbarGroup>
          </ToolbarGroup>
          <ToolbarGroup>
            <NavbarMenu />
          </ToolbarGroup>
        </Toolbar>

    )
  }
}