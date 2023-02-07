import { combineReducers } from 'redux';

import MovieReducer from '../reducers/MovieReducer'

const reducers = {
  
  starwarmovie:MovieReducer

};

const rootReducer = combineReducers(reducers);

export default rootReducer;
