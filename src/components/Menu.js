import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/film-list">Film List</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
