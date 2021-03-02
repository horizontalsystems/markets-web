import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'
import './index.scss';

import Routes from './components/Routes'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
