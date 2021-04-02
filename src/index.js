import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'
import './index.scss';

import store from './core/store'
import Routes from './components/Routes'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
