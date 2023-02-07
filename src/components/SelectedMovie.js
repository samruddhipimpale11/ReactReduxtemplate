import React, { useState } from "react";


const SelectedMovieDisplay = ({ movies, selectedMovie }) => {
    const selectedMovieEpisode = movies.find(movie => movie.title === selectedMovie);

  return (
    <div class="panel panel-default">
      <div class="panel-body">
      <h2>Selected Movie:</h2>
      {selectedMovieEpisode ? (
        <div>
          <h3>{selectedMovieEpisode.title}</h3>
          <p>Episode: {selectedMovieEpisode.episode_id}</p>
          <p>Year: {selectedMovieEpisode.release_date}</p>
          <p>Directed By: {selectedMovieEpisode.director}</p>
          <p>{selectedMovieEpisode.opening_crawl}</p>
        </div>
      ) : (
        <p>No movie selected.</p>
      )}
    </div>
    </div>
  );
};

export default SelectedMovieDisplay;