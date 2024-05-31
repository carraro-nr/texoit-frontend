// src/components/Layout.js
import React from 'react';
import Menu from './Menu';

function Layout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <Menu />
      <div style={{ marginLeft: '200px', padding: '20px', flexGrow: 1 }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
