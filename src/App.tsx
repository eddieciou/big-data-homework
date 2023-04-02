import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AiOutlineSetting } from 'react-icons/ai';

import HomePage from './containers/HomePage';
import ResultPage from './containers/ResultPage';

function App() {
  return (
    <>
      <header className="flex h-12 items-center justify-between bg-[#651FFF] px-4">
        <div className="text-base font-bold text-white">Logo</div>
        <div className="rounded-md border border-[#8f60f5] p-1"><AiOutlineSetting className="text-base text-white" /></div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:year/:county/:town" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
