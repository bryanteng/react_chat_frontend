import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';


  let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <ActionCableProvider url={API_WS_ROOT}>
      <App />
    </ActionCableProvider>,
  , document.getElementById('root'));
