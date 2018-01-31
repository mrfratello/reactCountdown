import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Welcome from './blocks/Welcome';
// import Countdown from './blocks/Countdown/Countdown';
import Welcome from './blocks/Countdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>


      </div>
    );
  }
}
        // <Welcome name="John" />
        // <Countdown name="John" />
export default App;
