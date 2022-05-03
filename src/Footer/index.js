import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../reducers/messagesReducer';

const Footer = ({ backgroundColor }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [message, setMessage] = useState(localStorage.getItem('message') || '');

  const messages = useSelector((state) => state.messages.list);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <footer style={{ backgroundColor: backgroundColor }}>
      <ul>
        {messages.map((message, id) =>
          <li key={id}>{message}</li>
        )}
      </ul>

      <Input
        value={message}
        onValueChange={(event) => onMessageChange(event, setMessage)}
        inputRef={inputRef}
      />

      <button onClick={() => onAddMessage(message, dispatch)}>Add Message !</button>
    </footer>
  );
};

const onMessageChange = (event, setMessage) => {
  setMessage(event.target.value);

  localStorage.setItem('message', event.target.value);
};

const onAddMessage = (message, dispatch) => {
  dispatch(addMessage(message));
};

Footer.propTypes = {
  backgroundColor: PropTypes.oneOf(['red', 'blue']).isRequired
};

Footer.defaultProps = {
  backgroundColor: "red"
};

export default Footer;