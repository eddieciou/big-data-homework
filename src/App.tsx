import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AiOutlineSetting } from 'react-icons/ai';

import HomePage from './containers/HomePage';
import ResultPage from './containers/ResultPage';

function App() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <header className="flex h-12 items-center justify-between bg-[#651FFF] px-4">
        <div className="text-base font-bold text-white">Logo</div>
        <div className="rounded-md border border-[#8f60f5] p-1"><AiOutlineSetting className="text-base text-white" /></div>
      </header>
      <div className="flex h-full grow overflow-y-scroll sm:overflow-hidden">
        <div className="relative w-0 sm:w-[10%]">
          <p className="brand absolute -left-5 top-0 text-[190px] font-bold leading-none tracking-[0.18em]">TAIWAN</p>
        </div>
        <div className="flex w-full justify-center sm:w-[90%] sm:overflow-y-scroll">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:year/:county/:town" element={<ResultPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
