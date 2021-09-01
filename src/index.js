
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from "./js/App";
import './js/eel/eelJsFunctions'

window['eel'].set_host('ws://localhost:1234')
ReactDOM.render(<App />, document.getElementById('root'));