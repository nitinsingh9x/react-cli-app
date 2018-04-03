import React, {Component} from 'react';
import {
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

class Header extends Component {

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarBrand href="#"></NavbarBrand>
        <div className="app-navbar-right-option">Sign Off</div>
      </header>
    );
  }
}

export default Header;
