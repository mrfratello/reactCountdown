import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Countdown from './Countdown/Countdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name="User" />
        <Countdown title="Обратный отсчет" second={15} />
      </div>
    );
  }
}

export default App;
