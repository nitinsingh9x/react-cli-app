import React from 'react';
import {Panel} from 'primereact/components/panel/Panel';

const AddNewCriteria = (props) =>{
    
   
   return(
<div className = "animated fadeIn"> 
<Panel header="Rule Conditions">
    <div className="row">
            <form className="form-inline col-sm-12">
                <div className="form-group col-sm-3">
                    <input type="text" className="form-control w-100" value=""/>
                </div>
                <div className="form-group col-sm-3">
                    <select className="form-control w-100">
                          <option value="">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                          <option value="4">Option 4</option>
                        </select>
                </div>
                <div className="form-group col-sm-5">
                    <input type="text" className="form-control w-100" id="" placeholder=""/>
                </div>
                <span><i class="fa fa-check fa-2x"></i></span>
            </form>
    </div>
</Panel>
<br/>
<Panel header="Retrive/Save Conditions">
    <div className="row">
            <form className="form-inline col-sm-12">
                <div className="form-group col-sm-3">
                    <input type="text" className="form-control w-100" value="" placeholder="Type Criteria Name"/>
                </div>
                <div className="form-group col-sm-3">
                    
                </div>
                <div className="form-group col-sm-5">
                    
                </div>
                
            </form>
    </div>
</Panel> 
<br/>
<Panel header="Field List">
<div className="row">
            <form className="form-inline col-sm-12">
                <div className="form-group col-sm-4 mx-5">
                    <input type="text" className="form-control w-100" value=""/>
                </div>
            </form>
</div>
<div className="row m-4">
<div className="col-sm-12">
    <Panel header="Driver Fields">
        <div className="row">
            <div className="form-inline col-sm-12">
                <div className="form-group col-sm-3">
                <input type="text" className="form-control-plaintext w-100" value="Option 1"/>
                </div>
                <div className="form-group col-sm-3">
                <input type="text" className="form-control-plaintext w-100" value="Option 2"/>
                </div>
                <div className="form-group col-sm-3">
                <input type="text" className="form-control-plaintext w-100" value="Option 3"/>
                </div>
                <div className="form-group col-sm-3">
                <input type="text" className="form-control-plaintext w-100" value="Option 3"/>
                </div>
            </div>
        </div>
        <div className="row mt-2">
        <div className="form-inline col-sm-12">
                <div className="form-group col-sm-3">
                <input type="text" className="form-control-plaintext w-100" value="Option 3"/>
                </div>
                <div className="form-group col-sm-3">
                <input type="text" className="form-control-plaintext w-100" value="Option 3"/>
                </div>
                <div className="form-group col-sm-3">
                <input type="text" className="form-control-plaintext w-100" value="Option 3"/>
                </div>
                <div className="form-group col-sm-3">
                <input type="text" className="form-control-plaintext w-100" value="Option 3"/>
                </div>
            </div>
        </div>
    </Panel> 
    </div>
</div>
</Panel> 
</div>
   );
}

export default AddNewCriteria;