import React from 'react';
import Title from "./Countdown-Title";
import TimeFormat from "../TimeFormat/TimeFormat";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    const hour = parseInt(this.props.hour) || 0,
        minute = parseInt(this.props.minute) || 10,
        second = parseInt(this.props.second) || 10
    const time = hour * 3600 + 60 * minute + second;
    this.state = {
        time: time
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
      let time = this.state.time;
      this.setState({
          time: --time
      });
  }

  render() {
    return (
        <div>
            <Title value={this.props.title} />
            <TimeFormat time={this.state.time} />
        </div>
    );
  }
}

export default Countdown;
