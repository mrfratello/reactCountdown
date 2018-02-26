import React from 'react';
import PropTypes from 'prop-types';
import Title from "./Countdown-Title";
import TimeFormat from "../TimeFormat/TimeFormat";

class Countdown extends React.Component {
    static defaultProps = {
        hour: 4,
        minute: 2,
        second: 0
    }

    constructor(props) {
        super(props);
        const time = this.props.hour * 3600 + 60 * this.props.minute + this.props.second;
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

Countdown.propTypes = {
    hour: PropTypes.number,
    minute: PropTypes.number,
    second: PropTypes.number
};


export default Countdown;
