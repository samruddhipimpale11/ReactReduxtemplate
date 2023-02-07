export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const SEARCH_MOVIES = "SEARCH_MOVIES";

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST
});

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  movies
});

export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  error
});

export const selectMovie = movie => ({
  type: SELECT_MOVIE,
  movie
});

export const searchMovies = (searchTerm) => ({
  type: SEARCH_MOVIES,
  searchTerm,
});


export const fetchMovies = () => {
  return dispatch => {
    dispatch(fetchMoviesRequest());
    return fetch('https://swapi.dev/api/films/?format=json')
      .then(response => response.json())
      .then(data => {
        dispatch(fetchMoviesSuccess(data.results));
      })
      .catch(error => {
        dispatch(fetchMoviesFailure(error));
      });
  };
};


