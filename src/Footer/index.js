import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

class Footer extends React.Component {

  messageInputRef;

  constructor(props) {
    super(props);

    this.state = {
      message: localStorage.getItem('message') || ''
    };
  }

  componentDidMount() {
    this.messageInputRef.focus();
  }

  render() {
    return (
      <footer style={{ backgroundColor: this.props.backgroundColor }}>
        {this.state.num})

        <Input
          value={this.state.message}
          onValueChange={this.onMessageChange}
          inputRef={(ref) => { this.messageInputRef = ref }}
        />

        {/*<input
          type="text"
          value={this.state.message}
          onChange={(event) => this.onMessageChange(event)}
          ref={(ref) => { this.messageInputRef = ref }}
        />*/}

        <button onClick={this.onSendMessage}>Send Message !</button>
      </footer>
    )
  }

  onMessageChange = (event) => {
    console.log('event', event.target.value);

    this.setState({
      message: event.target.value
    });

    localStorage.setItem('message', event.target.value);
  };

  onSendMessage = () => {
    console.log('Sending : ' + this.state.message);
  };
}

Footer.propTypes = {
  backgroundColor: PropTypes.oneOf(['red', 'blue']).isRequired
};

Footer.defaultProps = {
  backgroundColor: "red"
};

export default Footer;