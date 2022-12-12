import React from 'react'
import { connect } from 'react-redux'
import Counter from './Counter'
import { increment, decrement } from '../actions/action'


const mapStateToProps = (state) => {
  return {
    count: state.samm.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment())
    },
    onDecrement: () => {
      dispatch(decrement())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)