

import React from "react";


import { render } from 'react-dom'
import App from './App'

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './commonreducer/reducers'
// import reducer from "./reducers/reducers.js";
const store = createStore(rootReducer, applyMiddleware(thunk));


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//https://redux.js.org/introduction/examples
