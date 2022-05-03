import React from 'react';
import { useSelector } from 'react-redux';

const TestPage = () => {
  const messages = useSelector((state) => state.messages.list);

  return (
    <div>
      Test page !

      <ul>
        {messages.map((message, id) =>
          <li key={id}>{message}</li>
        )}
      </ul>
    </div>
  )
};

export default TestPage;