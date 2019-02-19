import './custom.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//ReactDOM.render(<BrowserRouter basename={'/withoutservers'}><App/></BrowserRouter>, document.getElementById('root'));
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));