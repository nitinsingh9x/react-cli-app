import React, { Component } from 'react';

import {Steps} from 'primereact/components/steps/Steps';
import {Panel} from 'primereact/components/panel/Panel';

import "./AddNewRule.css"
import AddNewCriteria from '../../shared/criteria/criteria'

class AddNewRule extends Component {
state = {
  activeIndex: 0
};

changeToNextActiveIndex = () => {
  this.setState((prevState) => {
    return {
      activeIndex: prevState.activeIndex + 1
    }
  });
}

changeToPrevActiveIndex = () => {
  this.setState((prevState) => {
    return {
      activeIndex: prevState.activeIndex - 1
    }
  });
}
render() {
var items = [
  {
    label: '',
    command: (event) => {
      this
        .growl
        .show({severity: 'info'});
      this.setState({activeIndex: 0});
    }
  }, {
    label: '',
    command: (event) => {
      this
        .growl
        .show({severity: 'info'});
      this.setState({activeIndex: 1});
    }
  }, {
    label: '',
    command: (event) => {
      this
        .growl
        .show({severity: 'info'});
      this.setState({activeIndex: 2});
    }
  }
];
    return (
      <div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
            <Steps model={items} activeIndex={this.state.activeIndex} className="steps-custom"/>
            </div>
          </div>
        <div className="clearFix"></div>
          <hr/>
          { this.state.activeIndex === 0 && <div className="row animated fadeIn">
            <div className="col-sm-12">
            <Panel header="Rule Details">
                <form>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Rule Type</label>
                      <div className="col-sm-5">
                      <select className="form-control">
                          <option value="">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                          <option value="4">Option 4</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Rule Response</label>
                      <div className="col-sm-5">
                        <input type="text" className="form-control" id="ruleResponse" placeholder=""/>
                      </div>
                    </div>
                </form>
                </Panel>
            </div>
            
       </div>}
       { this.state.activeIndex === 1 && <AddNewCriteria /> }
       <div className="row">
          <div className="col-sm-12 mt-2">
          { this.state.activeIndex !== 0 && <input className="btn btn-primary float-left" onClick={this.changeToPrevActiveIndex} type="button" value="Back"/>}
            <input className="btn btn-primary float-right" onClick={this.changeToNextActiveIndex} type="button" value="Next"/>
          </div>
       </div>
    </div>
    )
  }
}

export default AddNewRule;
