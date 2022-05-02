import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import { useNavigate } from 'react-router-dom';

const Footer = ({ backgroundColor }) => {
  const navigation = useNavigate();
  const [message, setMessage] = useState(localStorage.getItem('message') || '');

  return (
    <footer style={{ backgroundColor: backgroundColor }}>
      <Input
        value={message}
        onValueChange={(event) => onMessageChange(event, setMessage)}
        //inputRef={(ref) => { this.messageInputRef = ref }}
      />

      <button onClick={() => onSendMessage(message, navigation)}>Send Message !</button>
    </footer>
  );
};

const onMessageChange = (event, setMessage) => {
  setMessage(event.target.value);

  localStorage.setItem('message', event.target.value);
};

const onSendMessage = (message, navigation) => {
  navigation('/test/' + message);
};

Footer.propTypes = {
  backgroundColor: PropTypes.oneOf(['red', 'blue']).isRequired
};

Footer.defaultProps = {
  backgroundColor: "red"
};

export default Footer;