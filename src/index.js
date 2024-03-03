import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<HashRouter><App /></HashRouter>,
 document.getElementById('root'));

serviceWorker.unregister();
