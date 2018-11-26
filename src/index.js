import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';


  let store = createStore(reducer, applyMiddleware(thunk))

 ReactDOM.render(
   <Provider store={store}>
       <ActionCableProvider url={API_WS_ROOT}>
           <App />
       </ActionCableProvider>
   </Provider>,
   document.getElementById('root')
 );
