import React from 'react';
import config from './config';
import Routes from './Routes';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById(config.APP_EL_ID)
);
