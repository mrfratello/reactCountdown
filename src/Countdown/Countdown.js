import React from 'react';
import Title from "./Countdown-Title";

class Countdown extends React.Component {
  render() {
    return (
        <Title value={this.props.title} />
    );
  }
}

export default Countdown;
