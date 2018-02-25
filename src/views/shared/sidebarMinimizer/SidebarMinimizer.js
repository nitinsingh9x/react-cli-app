import React, {Component} from 'react';

class SidebarMinimizer extends Component {

  sidebarMinimize() {
    document.body.classList.toggle('sidebar-minimized');
  }

  brandMinimize() {
    document.body.classList.toggle('brand-minimized');
  }

  render() {
    return (
      <div className="sidebar-footer m-0  p-0">
          <div className="container m-0  p-0">
          <div className="row m-0  p-0">
              <div className="col-sm-12 m-0  p-0 stageCoach">
              </div>
          </div>
            <div className="row m-0  p-0">
              <div className="col-sm-6 m-0  p-0" >
              <button type="button" className="btn btn-dark wdth-99"><i className=""></i>CBOA Home</button>
              </div>
              <div className="col-sm-6 mt-0  px-0">
              <button type="button" className="btn btn-dark wdth-100">Sign Off</button>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default SidebarMinimizer;
