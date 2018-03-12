import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
//PrimeReact Style
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'react-select/dist/react-select.css';
// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render((
  
    <HashRouter>
      <Switch>
        <Route path="/" name="Home" component={App}/>
      </Switch>
    </HashRouter>
  
  ), document.getElementById('root'));
registerServiceWorker();
