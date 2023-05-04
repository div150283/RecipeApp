import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavbarBrand, NavLink} from 'reactstrap';
import './App.css';

class AppNav extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: '#0066CC' }} light expand="md">
          <NavbarBrand style={{ color: 'white' }}  href="/">Recipe App</NavbarBrand>
          <Nav className="ml-auto" navbar>
           
            <NavItem>
              <NavLink className="nav-link-custom" href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-custom" href="/recipes">View Recipes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-custom" href="/add">Add Recipe</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className="nav-link-custom" href="/info">Useful Info</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className="nav-link-custom" href="/Loginpage">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-custom" href="/SignupPage">Signup</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
      </div>
    );
  }
}

export default AppNav;