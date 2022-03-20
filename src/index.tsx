import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Test } from './test';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from './utils/Notify';
ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider hideIconVariant={false}>
      <SnackbarUtilsConfigurator />
    </SnackbarProvider>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
Test()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
