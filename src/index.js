import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Forms
import FormOne from './Containers/FormOne/';
import FormTwo from './Containers/FormTwo/';

ReactDOM.render(<FormOne />, document.getElementById('formOne'));
ReactDOM.render(<FormTwo />, document.getElementById('formTwo'));

registerServiceWorker();
