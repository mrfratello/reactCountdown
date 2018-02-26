import React from 'react';
import Unit from '../Unit/Unit';

class TimeFormat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: 0,
            minute: 0,
            second: 0
        }
    }

    _parseTime(time) {
        time = parseInt(time, 10);
        const second = time % 60;
        time = Math.floor(time / 60);
        const minute = time % 60,
            hour = Math.floor(time / 60);
        return {
            hour,
            minute,
            second
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this._parseTime(nextProps.time))
    }

    render() {
        return (
            <div className="TimeFormat">
                <Unit value={this.state.hour} />:
                <Unit value={this.state.minute} />:
                <Unit value={this.state.second} />
            </div>
        );
    }
}

export default TimeFormat;
