import React, {Component} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from './views/shared/header/Header';
import Sidebar from './views/shared/sidebar/Sidebar';
import Breadcrumb from './views/shared/breadcrumb/Breadcrumb';

import Dashboard from './views/dashboard/Dashboard';
import Administration from './views/administration/Administration';
import AddNewRule from './views/rule-authoring/AddNewRule/AddNewRule';
import UpdateExistingRule from './views/rule-authoring/UpdateExistingRule/UpdateExistingRule';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
          <div className="cboa-top-breadcrumb">Credit Bridge Rule Authoring</div>
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
          </main>
        </div>
      </div>
    );
  }
}

export default App;
