import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../actions/action'

const Counter = ({ count, onDecrement, onIncrement }) => (
  <div>
    {console.log(count)}
    <p>Count: {count}</p>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
  </div>
)


export default Counter