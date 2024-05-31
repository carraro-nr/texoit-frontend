import React from 'react';

function MovieCard({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>ID: {movie.id}</p>      
      <p>Year: {movie.year}</p>      
    </div>
  );
}

export default MovieCard;
