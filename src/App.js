import React, { Component, createRef  } from 'react';
import './App.css';
import './animations/react-transitions.css';
import Form from './components/Form';
import Message from './components/Message';

// Firebase
import firebaseApp from './utils/firebase';

// Animations
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
        <CSSTransition
          timeout={200}
          classNames='fade'
          key={key}>
          <Message 
            message={this.state.messages[key].message}
            pseudo={this.state.messages[key].pseudo}
            isUser={this.isUser}
          />
        </CSSTransition>
      ));

    return (
      <div className='box'>
        <div className="messages" ref={this.messagesRef}>
          <TransitionGroup className="message">
            { messages }
          </TransitionGroup>
        </div>
        <Form addMessage={this.addMessage} pseudo={this.state.pseudo} />
      </div>
    )
  }
}

export default App;
