import React, {Component} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from './views/shared/header/Header';
import Sidebar from './views/shared/sidebar/Sidebar';
import Breadcrumb from './views/shared/breadcrumb/Breadcrumb';
import { NavbarToggler } from 'reactstrap';
import Dashboard from './views/dashboard/Dashboard';
import Administration from './views/administration/Administration';
import AddNewRule from './views/rule-authoring/AddNewRule/AddNewRule';
import UpdateExistingRule from './views/rule-authoring/UpdateExistingRule/UpdateExistingRule';

class App extends Component {
  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
    var element = document.getElementById("top-toggler");
    element.classList.toggle("noDisplay");
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <div className="main">
          <div className="breadcrumb-toggler navbar-dark">
          <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-dark navbar-toggler-icon "></span>
          </NavbarToggler>
          <div id="top-toggler" className="noDisplay">
            <NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle}>
            <span className="custom-toggler navbar-toggler-icon"></span>
            </NavbarToggler></div>
            <div className="cboa-top-breadcrumb">Credit Bridge Rule Authoring</div>
          </div>
          
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/administration" name="Administration" component={Administration}/>
                <Route path="/ruleAuthoring/updateExistingRule" name="UpdateExistingRule" component={UpdateExistingRule}/>
                <Route path="/ruleAuthoring/addNewRule" name="AddNewRule" component={AddNewRule}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
