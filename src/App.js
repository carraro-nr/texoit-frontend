import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FilmList from './components/FilmList';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Menu />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/film-list" element={<FilmList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
