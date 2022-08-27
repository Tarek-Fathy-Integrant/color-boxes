import React, { Component } from 'react';
import Container from './components/Container'
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
      <Container base={4} />
    </div>
  }
}

export default App;
