import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//import counter from './reducers/counter' // import this for normal execution without common reducer
import rootReducer from './commonreducer/reducers' //import this for using common reducer


render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.querySelector('#root')
)