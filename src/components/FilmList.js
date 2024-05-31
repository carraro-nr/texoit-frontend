import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/api';

function FilmList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [year, setYear] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchMovies({ page, size: pageSize, winner, year });
      setMovies(moviesData);
    };

    fetchData();
  }, [page, pageSize, winner, year]);

  return (
    <div>
      <h1 style={{backgroundColor: 'lightgray', padding: '10px'}}>Film List</h1>
      <div>
        <label>Year: </label>
        <input type="text" value={year} onChange={e => setYear(e.target.value)} />
        <label>Winner: </label>
        <input type="checkbox" checked={winner} onChange={e => setWinner(e.target.checked)} />
        <button onClick={() => setPage(1)}>Search</button>
      </div>
      <table style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
          <tr>
            <th style={{backgroundColor: 'lightgray', border: '1px solid black', padding: '8px'}}>ID</th>
            <th style={{backgroundColor: 'lightgray', border: '1px solid black', padding: '8px'}}>Year</th>
            <th style={{backgroundColor: 'lightgray', border: '1px solid black', padding: '8px'}}>Title</th>            
            <th style={{backgroundColor: 'lightgray', border: '1px solid black', padding: '8px'}}>Winner?</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id}>
              <td style={{border: '1px solid black', padding: '8px'}}>{movie.id}</td>
              <td style={{border: '1px solid black', padding: '8px'}}>{movie.year}</td>
              <td style={{border: '1px solid black', padding: '8px'}}>{movie.title}</td>              
              <td style={{border: '1px solid black', padding: '8px'}}>{movie.winner ? 'Yes' : 'No'}</td>                            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilmList;
