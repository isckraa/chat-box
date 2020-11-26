import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Message from './components/Message';

class App extends Component {
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
        <Form />
      </div>
    )
  }
}

export default App;
