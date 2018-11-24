import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import { ActionCableProvider } from 'react-actioncable-provider'

  let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
	<ActionCableProvider url="ws://localhost:3000/cable">
    	<App />
	</ActionCableProvider>
  </Provider>
  , document.getElementById('root'));
