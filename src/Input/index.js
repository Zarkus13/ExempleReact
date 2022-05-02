import React from 'react';

const Input = ({ value, onValueChange, inputRef }) =>
  <input type="text"
         value={value}
         onChange={onValueChange}
         ref={inputRef} />;

export default Input;