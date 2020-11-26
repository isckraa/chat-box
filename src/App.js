import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Message from './components/Message';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: {},
      pseudo: this.props.match.params.pseudo
    }
  }

  addMessage = (message) => {
    const messages = { ...this.state.messages };
    messages[`message-${Date.now()}`] = message;
    this.setState({ messages });
  }
  
  render () {
    return (
      <div className='box'>
        <div className="message">
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
        <Form addMessage={this.addMessage} pseudo={this.state.pseudo} />
      </div>
    )
  }
}

export default App;
