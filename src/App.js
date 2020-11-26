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
    const messages = Object
      .keys(this.state.messages)
      .map( key => (
        <Message 
          key={key}
          message={this.state.messages[key].message}
          pseudo={this.state.messages[key].pseudo}
        />
      ));
    console.log( messages )

    return (
      <div className='box'>
        <div className="messages">
          <div className="message">
            { messages }
          </div>
        </div>
        <Form addMessage={this.addMessage} pseudo={this.state.pseudo} />
      </div>
    )
  }
}

export default App;
