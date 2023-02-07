import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    SELECT_MOVIE,
    SEARCH_MOVIES
    
  } from '../actions/action';
  
  const initialState = {
    movies: [],
    selectedMovie: null,
    isLoading: false,
    error: null,
    searchTerm:null,
   
  };
  
  export default function movieReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_MOVIES_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case FETCH_MOVIES_SUCCESS:
        return {
          ...state,
          isLoading: false,
          movies: action.movies
        };
      case FETCH_MOVIES_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error
        };
      case SELECT_MOVIE:
        return {
          ...state,
          selectedMovie: action.movie
        };
        case SEARCH_MOVIES:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };

      
      default:
        return state;
    }
  }
  