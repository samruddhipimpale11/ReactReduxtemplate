import { combineReducers } from 'redux';

import CounterReducer from '../reducers/counter';

const reducers = {
  samm: CounterReducer,

};

const rootReducer = combineReducers(reducers);

export default rootReducer;
