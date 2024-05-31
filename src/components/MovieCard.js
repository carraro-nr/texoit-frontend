import React from 'react';

function MovieCard({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      {/* Adicione mais informações do filme conforme necessário */}
    </div>
  );
}

export default MovieCard;
