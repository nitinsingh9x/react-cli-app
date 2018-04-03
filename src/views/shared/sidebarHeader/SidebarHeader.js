import React, {Component} from 'react';
import {NavbarToggler, NavbarBrand} from 'reactstrap';

class SidebarHeader extends Component {

  sidebarToggle(e) {
    e.preventDefault();
    document
      .body
      .classList
      .toggle('sidebar-hidden');
    var element = document.getElementById("top-toggler");
    element
      .classList
      .toggle("noDisplay");
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document
      .body
      .classList
      .toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document
      .body
      .classList
      .toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document
      .body
      .classList
      .toggle('aside-menu-hidden');
  }

  render() {
    //return null Uncomment following code lines to add Sidebar Header
    return (
      <div className="sidebar-header ">
        <div className="navbar-dark text text-left">
          <NavbarToggler className="d-md-down-none " onClick={this.sidebarToggle}>
            <span className="navbar-toggler-icon"></span>
          </NavbarToggler>
        </div>
        <div className="mt-2 mb-2">
          <span className="text-left">Application &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <select className="text-right">
            <option value="Application">Application</option>
          </select>
        </div>
      </div>
    )
  }
}

export default SidebarHeader;
