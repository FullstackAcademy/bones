'use strict'
import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavDropdown, MenuItem, FormGroup, FormControl, bsStyle } from 'react-bootstrap'

export default () => {
  return (
    <div className="nav-bar">
      <div className="black-bar">
        <p>Made in the USA - Sweatshop Free</p>
      </div>
      <Navbar>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="Login" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Sign Up</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/homepage">Animal Apparel<sup>®</sup></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="Women" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Costume</MenuItem>
              <MenuItem eventKey={3.1}>Winter</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Men" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Costume</MenuItem>
              <MenuItem eventKey={3.1}>Winter</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Kids" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Costume</MenuItem>
              <MenuItem eventKey={3.1}>Winter</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Dogs" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Costume</MenuItem>
              <MenuItem eventKey={3.1}>Winter</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Sale" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Costume</MenuItem>
              <MenuItem eventKey={3.1}>Winter</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar className="search">
        <Nav pullRight>
          <Navbar.Text>Search</Navbar.Text>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Style# or Keyword" />
            </FormGroup>
            {' '}
          </Navbar.Form>
        </Nav>
      </Navbar>
    </div>
  )
}

