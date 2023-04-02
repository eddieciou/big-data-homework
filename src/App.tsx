import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage';
import ResultPage from './containers/ResultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:year/:county/:town" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
