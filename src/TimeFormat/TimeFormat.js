import React from 'react';
import numeral from 'numeral';

class TimeFormat extends React.Component {

  parseTime(time) {
      time = parseInt(time, 10);
      const second = time % 60;
      time = Math.floor(time / 60);
      const minute = time % 60,
          hour = Math.floor(time / 60);
      return {
          hour: numeral(hour).format('00'),
          minute: numeral(minute).format('00'),
          second: numeral(second).format('00')
      }
  }

  render() {
    let time = this.parseTime(this.props.time);
    return (
        <div>
            {time.hour} : {time.minute} : {time.second}
        </div>
    );
  }
}

export default TimeFormat;
