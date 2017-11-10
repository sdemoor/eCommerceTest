import React from 'react';
import ReactDOM from 'react-dom';
import ECommerce from './components/App.jsx';

window.onload = () => {
  ReactDOM.render(<ECommerce/>, document.getElementById('main'));
};