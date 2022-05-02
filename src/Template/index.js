import React from 'react';
import { Route, Router } from 'react-router-dom';

const Template = ({ children }) =>
  <div>
    <header>Template header</header>

    {children}
  </div>;

export default Template;