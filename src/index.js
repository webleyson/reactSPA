import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom'
ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));