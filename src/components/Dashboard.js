// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { fetchWinnersByYear, fetchTopStudios, fetchProducersWithInterval } from '../services/api';

function Dashboard() {
  const [yearsWithMultipleWinners, setYearsWithMultipleWinners] = useState([]);
  const [topStudios, setTopStudios] = useState([]);
  const [producersWithInterval, setProducersWithInterval] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const yearsData = await fetchWinnersByYear();
      const studiosData = await fetchTopStudios();
      const producersData = await fetchProducersWithInterval();

      setYearsWithMultipleWinners(yearsData);
      setTopStudios(studiosData);
      setProducersWithInterval(producersData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Years with Multiple Winners</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Winner Count</th>
          </tr>
        </thead>
        <tbody>
          {yearsWithMultipleWinners.map(year => (
            <tr key={year.year}>
              <td>{year.year}</td>
              <td>{year.winnerCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Repeat the same pattern for other sections */}
    </div>
  );
}

export default Dashboard;
