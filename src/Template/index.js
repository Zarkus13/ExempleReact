import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Routing from '../routes';
import App from '../App';
import TestPage from '../pages/TestPage';

const HomeNav = () =>
  <div>Home page</div>;

const TestNav = () =>
  <div>/test page</div>;

const Template = () => {
  return (
    <div>
      <header>Template header</header>

      <nav>
        <Routes>
          <Route path="/" element={<HomeNav/>}/>
          <Route path="/test/:message" element={<TestNav/>}/>
        </Routes>
      </nav>

      <Routing/>
    </div>
  );
};

export default Template;