// src/pages/FilmListPage.js
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import FilmList from '../components/FilmList';

function FilmListPage() {
  return (
    <Layout>
      <FilmList />
    </Layout>
  );
}

export default FilmListPage;
