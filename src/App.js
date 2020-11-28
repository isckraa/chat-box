import { createClass } from 're-base';
import React, { Component, createRef  } from 'react';
import './App.css';
import Form from './components/Form';
import Message from './components/Message';

// Firebase
import firebaseApp from './utils/firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: {},
      pseudo: this.props.match.params.pseudo
    }
  }

  messagesRef = createRef();

  componentDidMount() {
    firebaseApp.syncState('/', {
      context: this,
      state: 'messages'
    });
  }

  componentDidUpdate() {
    const ref = this.messagesRef.current;
    ref.scrollTop = ref.scrollHeight;
  }

  addMessage = (message) => {
    const messages = { ...this.state.messages };
    messages[`message-${Date.now()}`] = message;
    Object
      .keys(messages)
      .slice(0,-10)
      .forEach(key => {
        messages[key] = null
      })
    this.setState({ messages });
  }

  isUser = pseudo => pseudo === this.state.pseudo
  
  render () {
    const messages = Object
      .keys(this.state.messages)
      .map( key => (
        <Message 
          key={key}
          message={this.state.messages[key].message}
          pseudo={this.state.messages[key].pseudo}
          isUser={this.isUser}
        />
      ));

    return (
      <div className='box'>
        <div className="messages" ref={this.messagesRef}>
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
