import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import TestPage from './pages/TestPage';

const Routing = () =>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/test/:message" element={<TestPage />} />
  </Routes>

export default Routing;