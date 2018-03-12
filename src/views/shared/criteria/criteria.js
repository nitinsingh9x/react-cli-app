import React, {Component} from 'react';
import './new-criteria.css';
import {Panel} from 'primereact/components/panel/Panel';
import {AutoComplete} from 'primereact/components/autocomplete/AutoComplete';
import Select from 'react-select';

class AddNewCriteria extends Component {
        constructor(props){
            super(props);
            this.state = {
                fieldItem:'',
                driverKey:'',
                driverValue:'',
                expressions:[],
                expressionValue:'',
                fieldItemList:[],
                ruleConditionList:[],
            };
            this.fieldItemList = [
                {
                    key:'ACCRUAL_BASIS',
                    items:[
                            {sorName: "LN", value: "1", lookupType: null, label: "30/360 (360/360)", acronym: "33"},
                            {sorName: "LN", value: "2", lookupType: null, label: "30/365 (360/365)", acronym: "33"},
                            {sorName: "LN", value: "3", lookupType: null, label: "30/ACTUAL (360/366)", acronym: "33"},
                            {sorName: "LN", value: "4", lookupType: null, label: "ACTUAL/360 (366/360)", acronym: "A3"},
                            {sorName: "LN", value: "5", lookupType: null, label: "ACTUAL/365 (366/365)", acronym: "A3"},
                            {sorName: "LN", value: "6", lookupType: null, label: "ACTUAL/ACTUAL (366/366)", acronym: "A3"}
                    ]
                },
                {
                    key:'COLLAT_CD',
                    items:[
                        {sorName: "LN", value: "111110", lookupType: null, label: "SOYBEAN FARMING", acronym: "SF"},
                        {sorName: "LN", value: "111120", lookupType: null, label: "OILSEED (EXCEPT SOYBEAN) FARMING", acronym: "OESF"},
                        {sorName: "LN", value: "111130", lookupType: null, label: "DRY PEA AND BEAN FARMING", acronym: "DPABF"},
                        {sorName: "LN", value: "111140", lookupType: null, label: "WHEAT FARMING", acronym: "WF"},
                        {sorName: "LN", value: "111150", lookupType: null, label: "CORN FARMING", acronym: "CF"},
                        {sorName: "LN", value: "111160", lookupType: null, label: "RICE FARMING", acronym: "RF"},
                        {sorName: "LN", value: "111191", lookupType: null, label: "OILSEED AND GRAIN COMBINATION FARMING", acronym: "OAGCF"},
                        {sorName: "LN", value: "111199", lookupType: null, label: "ALL OTHER GRAIN FARMING", acronym: "AOGF"},
                        {sorName: "LN", value: "111211", lookupType: null, label: "POTATO FARMING", acronym: "PF"},
                        {sorName: "LN", value: "111219", lookupType: null, label: "OTHER VEGETABLE (EXC POTATO)& MELON FARM", acronym: "OVEPMF"},
                        {sorName: "LN", value: "111310", lookupType: null, label: "ORANGE GROVES", acronym: "OG"}
                    ]
                },
                {
                    key:'BANK_TAX_CD',
                    items:[
                        {sorName: "LN", value: "0", lookupType: null, label: "TAXABLE - DEFAULT VALUE", acronym: "TDV"},
                        {sorName: "LN", value: "1", lookupType: null, label: "TAX EXEMPT", acronym: "TE"},
                        {sorName: "LN", value: "2", lookupType: null, label: "TAXABLE - ENTERED", acronym: "TE"},
                        {sorName: "LN", value: "3", lookupType: null, label: "TAX EXEMPT - BANK QUALIFIED", acronym: "TEBQ"},
                        {sorName: "LN", value: "4", lookupType: null, label: "TAX EXEMPT - NON-BANK QUALIFIED", acronym: "TENQ"},
                        {sorName: "LN", value: "5", lookupType: null, label: "TAX EXEMPT - ARRA 2009-2010", acronym: "TEA2"},
                        {sorName: "LN", value: "6", lookupType: null, label: "TAX EXEMPT - IPG/PI/AILS", acronym: "TEI"}
                    ]
                },
                {
                    key:'OBGN_NAICS',
                    items:[
                        {sorName: "LN", value: "0", lookupType: null, label: "ACCRUING", acronym: "A"},
                        {sorName: "LN", value: "2", lookupType: null, label: "ACCRUING (REINSTATEMENT)", acronym: "AR"},
                        {sorName: "LN", value: "7", lookupType: null, label: "COST RECOVERY, CHARGE OFF AND NON-ACCRUA", acronym: "CRCOAN"},
                        {sorName: "LN", value: "8", lookupType: null, label: "CASH BASIS, NON-ACCRUAL (COMMITMENT AND ", acronym: "CBNCA"}
                    ]
                },
                {
                    key:'CNTRY_OF_DOMICILE',
                    items:[
                        {sorName: "LN", value: "0", lookupType: null, label: "ACCRUING", acronym: "A"},
                        {sorName: "LN", value: "2", lookupType: null, label: "ACCRUING (REINSTATEMENT)", acronym: "AR"},
                        {sorName: "LN", value: "7", lookupType: null, label: "COST RECOVERY, CHARGE OFF AND NON-ACCRUA", acronym: "CRCOAN"},
                        {sorName: "LN", value: "8", lookupType: null, label: "CASH BASIS, NON-ACCRUAL (COMMITMENT AND ", acronym: "CBNCA"}
                    ]
                }
    
            ]
            this.expressionList = [
                {name:'IS EQUAL TO', value:'EQ'},
                {name:'IS NOT EQUAL TO', value:'NEQ'}
            ]
        }
    
    onDrop = (e) => {
        const data = JSON.parse(localStorage.getItem('driverField'));
        this.setState({
            expressions:data && data.expressions,
            driverValue:data.value,
            driverKey:data.key,
        })
        
        const filteredField = this.fieldItemList.find(fieldData => fieldData.key === data.key) ;
        if(!!filteredField){
            this.setState({fieldItemList:filteredField.items});
        }
        
    }

    addRuleCondition = () => {
        if(this.validateRuleFields()){
            
            const ruleModel = [{
                driverKey:this.state.driverKey,
                driverValue:this.state.driverValue,
                expression:this.expressionList.find(e => e.value === this.state.expressionValue).name ,
                fieldItem:this.state.fieldItem
            }]
            const rule = this.state.ruleConditionList.concat(ruleModel)
            this.setState({
                ruleConditionList:rule,
                driverValue:'',
                driverKey:'',
                expressionValue:'',
                fieldItem:''
            });
        }
        
    }

    removeRuleCondition = (i) => {
        this.setState({ ruleConditionList:this.state.ruleConditionList.filter((e,index) => index !== i) });
    }

    getFieldValue =(driverKey,fieldItemkey) => {
        const fieldLists = this.fieldItemList.find(e => e.key === driverKey).items;
        const fieldLabel = fieldLists.find((e) => e.value === fieldItemkey).label;
        return fieldLabel;
    }

    validateRuleFields = () => {
        
        const driverCodeElement = document.getElementById('driverCode');
        const expressionElement = document.getElementById('expression');
        const fieldItemSelectElement = this.state.fieldItem;
        const fieldItemSelectElementContainer = document.querySelector('.containFieldItem .Select-control');
        debugger;
        if(driverCodeElement.value === ""){
            driverCodeElement.classList.add('has-error');
        }
        else{
            driverCodeElement.classList.remove('has-error');
        }

        if(expressionElement.value === ""){
            expressionElement.classList.add('has-error');
        }
        else{
            expressionElement.classList.remove('has-error');
        }
        if(fieldItemSelectElement === ""){
            fieldItemSelectElementContainer.classList.add('has-error');
        }
        else{
            fieldItemSelectElementContainer.classList.remove('has-error');
        }
        // Return false is element has error class
        if(driverCodeElement.classList.contains('has-error')){
            return false;
        }
        if(expressionElement.classList.contains('has-error')){
            return false;
        }
        if(fieldItemSelectElementContainer.classList.contains('has-error')){
            return false;
        }
        return true;
    }
    render()
    {
        var allDriverFields = [
            {
              key:'ACCRUAL_BASIS',
              value:'Accrual Basis',
              expressions:[
                  {name:'IS EQUAL TO', value:'EQ'},
                  {name:'IS NOT EQUAL TO', value:'NEQ'}
              ]  
            },
            {
              key:'BANK_TAX_CD',
              value:'Bank Tax Code',
              expressions:[
                  {name:'IS EQUAL TO', value:'EQ'},
                  {name:'IS NOT EQUAL TO', value:'NEQ'}
              ]   
            },
            {
              key:'COLLAT_CD',
              value:'Collateral Code',
              expressions:[
                  {name:'IS EQUAL TO', value:'EQ'},
                  {name:'IS NOT EQUAL TO', value:'NEQ'}
              ]   
            },
            {
              key:'CNTRY_OF_DOMICILE',
              value:'Country Of Domicile',
              expressions:[
                  {name:'IS EQUAL TO', value:'EQ'},
                  {name:'IS NOT EQUAL TO', value:'NEQ'}
              ]   
            },
            {
              key:'OBGN_NAICS',
              value:'NAIC Code',
              expressions:[
                  {name:'IS EQUAL TO', value:'EQ'},
                  {name:'IS NOT EQUAL TO', value:'NEQ'}
              ]   
            }
        ]

        return (
            <div className="animated fadeIn">
                <Panel header="Rule Conditions">
                {   this.state.ruleConditionList.map((ruleCondition,index) =>
                            <div key={index} className="row">
                                <div  className="form-inline col-sm-12 mb-1">
                                    <div className="form-group col-sm-3">
                                        <div className="w-100">
                                            <input type="text" className="form-control w-100"
                                            readOnly value={ruleCondition.driverValue} />
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <div className="w-100">
                                            <select disabled className="form-control w-100">
                                                <option value="">{ruleCondition.expression}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-5 containFieldItem">                                
                                        <div className="w-100">
                                            <select disabled className="form-control w-100">
                                                    <option value="">{this.getFieldValue(ruleCondition.driverKey,ruleCondition.fieldItem)}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <span>
                                        <button type="button" onClick={(e) => this.removeRuleCondition(index)} className="close" aria-label="Close">
                                        <i aria-hidden="true" className="fa fa-trash fa-1x"></i>
                                        </button>
                                    </span>
                                </div>
                            </div> 
                                
                            )
                        }
                    <div className="row">
                       
                            
                        <div className="form-inline col-sm-12">
                            <div className="form-group col-sm-3"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => this.onDrop(e)}>
                                <input type="text" id="driverCode" className="form-control w-100"
                                readOnly placeholder="Drag from below list" value={this.state.driverValue} />
                            </div>
                            <div className="form-group col-sm-3">
                                <select className="form-control w-100" id="expression"
                                    value={this.state.expressionValue} onChange={(e) => this.setState({expressionValue:e.target.value}) } >
                                    <option value="">Expression</option>
                                    {this.state.expressions.map((driver)=>
                                        <option key={driver.value} value={driver.value}>{driver.name}</option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group col-sm-5 containFieldItem">                                
                                <Select
				                	id="fieldItem-select"
				                	ref={(ref) => { this.selectfieldItem = ref; }}
				                	onBlurResetsInput={false}
				                	onSelectResetsInput={false}
				                	options={this.state.fieldItemList}
				                	simpleValue
				                	clearable={true}
				                	name="description"
				                	disabled={false}
				                	value={this.state.fieldItem}
				                	onChange={(e)=> this.setState({fieldItem: e})}
				                	rtl={false}
                                    searchable={true}
                                    className="w-100"
                                    placeholder="Value(s) Ex.100,200"
				                />
                            </div>
                            <span>
                                <button type="button" onClick={this.addRuleCondition} className="close" aria-label="Close">
                                <i aria-hidden="true" className="fa fa-check fa-1x"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </Panel>
                <br/>
                <Panel header="Retrive/Save Conditions" toggleable={true}>
                    <div className="row">
                        <form className="form-inline col-sm-12">
                            <div className="form-group col-sm-3">
                                <input
                                    type="text"
                                    className="form-control w-100"
                                    value=""
                                    placeholder="Type Criteria Name"/>
                            </div>
                            <div className="form-group col-sm-3"></div>
                            <div className="form-group col-sm-5"></div>

                        </form>
                    </div>
                </Panel>
                <br/>
                <Panel header="Field List" toggleable={true}>
                    <div className="row">
                        <form className="form-inline col-sm-12">
                            <div className="form-group col-sm-4 mx-5">
                                <input type="text" className="form-control w-100" placeholder="Search driver fields.." value=""/>
                            </div>
                        </form>
                    </div>
                    <div className="row m-2">
                        <div className="col-sm-12">
                            <Panel header="Driver Fields" toggleable={true}>
                                <div className="row">
                                    <div className="form-inline col-sm-12">
                                        {allDriverFields.map((driver)=>
                                            <div key={driver.key} className="col-sm-3">
                                                <label 
                                                draggable
                                                onDragStart = {(e) => localStorage.setItem('driverField',JSON.stringify(driver))}
                                                className="form-group  m-1 w-100 form-control draggable-field">
                                                {driver.value}</label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="form-inline col-sm-12"></div>
                                </div>
                            </Panel>
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default AddNewCriteria;
