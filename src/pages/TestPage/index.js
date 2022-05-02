import React from 'react';
import { useParams } from 'react-router-dom';

const TestPage = () => {
  const params = useParams();

  return (
    <div>Test page : {params.message}</div>
  )
};

export default TestPage;