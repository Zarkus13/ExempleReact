import React from 'react';
import './styles.css';

function Header(props) {
  return (
    <header className="basic-header" style={{ color: props.color }}>
      {props.children}
    </header>
  );
}

export default Header;