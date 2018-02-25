import React, {Component} from 'react';

class SidebarHeader extends Component {

  render() {
    //return null
    //Uncomment following code lines to add Sidebar Header
    return (
      <div className="sidebar-header">
        <div>
            <span className="float-left">Application</span>
            <select className="float-right">
              <option value="Application">Application</option>
            </select>
        </div>
      </div>
    )
  }
}

export default SidebarHeader;
