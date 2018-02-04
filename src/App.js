import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Countdown from './Countdown/Countdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Welcome name="User" />
        <Countdown title="Обратный отсчет" hour="4" minute="10" seconds="10" />
      </div>
    );
  }
}

export default App;
