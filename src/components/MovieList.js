import React, { useEffect ,useState} from 'react';
import { connect } from 'react-redux';
import { fetchMovies, selectMovie ,searchMovies} from '../actions/action';
import SelectedMovieDisplay from './SelectedMovie';
import './style.css'


const MovieList = ({ movies,selectedMovie, isLoading, error, fetchMovies, selectMovie ,searchMovies}) => {

    const [moviesdata, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState('title');
  const [searchTerm, setSearchTerm] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(movies);
    
  
    const handleSearch = event => {
      setSearchTerm(event.target.value);
      setFilteredMovies(
        movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    };

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const sortMovies = (sortBy) => {
    setSortBy(sortBy);
    setMovies([...movies].sort((a, b) => {
      if (sortBy === 'release_date') {
        return movies.sort((a, b) => a.release_date - b.release_date)
      }
      return movies.sort((a, b) => a.episode_id - b.episode_id);
    }));
  };


  return (


    
    <div class="container">

    <div class="jumbotron">
    <h1>StarWar  Movies</h1>      

    </div>


    <input type="text" value={searchTerm} placeholder={'Search Episode'} onChange={handleSearch} />


        <div class="dropdown ">
    <button  class="btn btn-warning dropdown-toggle Sort_Button " type="button" data-toggle="dropdown">Sort By
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li onClick={() => sortMovies('title')}><a >Episode_ID</a></li>
      <li onClick={() => sortMovies('episode_id')}><a >year</a></li>
      
    
    </ul>
  </div>



    <table class="table table-bordered">
    <thead>
      <tr>
        <th>Episode_ID</th>
        <th>Episode Title</th>
        <th> Episode Release date</th>
      </tr>
    </thead>
    <tbody>
    { searchTerm ===''?movies.map(movie => (
        <tr key={movie.episode_id}>
          <td onClick={() => selectMovie(`${movie.title}` )}>{movie.episode_id}</td>
          <td onClick={() => selectMovie(`${movie.title}`)}>{movie.title}</td>
          <td>{movie.release_date}</td>
          
        </tr>
      )):filteredMovies.map(movie => (
        <tr key={movie.episode_id}>
         <td onClick={() => selectMovie(`${movie.title}` )}>{movie.episode_id}</td>
          <td onClick={() => selectMovie(`${movie.title}`)}>{movie.title}</td>
          <td>{movie.release_date}</td>
         
          
        </tr>
      ))}
    </tbody>
        </table>
   <SelectedMovieDisplay movies={movies} selectedMovie={selectedMovie} />

  
    </div>
   
   
  );
};

const mapStateToProps = state => ({
  movies: state.starwarmovie.movies,
  selectedMovie:state.starwarmovie.selectedMovie,
  isLoading: state.starwarmovie.isLoading,
  error: state.starwarmovie.error
 
  
});

const mapDispatchToProps = {
  fetchMovies,
  selectMovie,
  searchMovies,
 
  
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)


