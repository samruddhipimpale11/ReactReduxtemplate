import React from 'react'
import { connect } from 'react-redux'
import MovieList from './MovieList'
import { fetchMovies, selectMovie ,searchMovies} from '../actions/action'


const mapStateToProps = (state) => {
  return {
    movies: state.starwarmovie.movies,
    //isLoading: state.starwarmovie.isLoading,
    //error: state.starwarmovie.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => {
      dispatch(fetchMovies())
    },
    selectMovie: () => {
      dispatch(selectMovie())
    },
    searchMovies: () => {
        dispatch(searchMovies())
      }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)