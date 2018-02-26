import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import './Unit.css';

class Unit extends React.Component {
    static defaultProps = {
        value: 0
    }

    constructor(props) {
        super(props);
        this.state = {
            output: "--"
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            output: numeral(nextProps.value).format('00')
        })
    }

    render() {
        return (
            <div className="unit">
                {this.state.output}
            </div>
        );
    }
}

Unit.propTypes = {
    value: PropTypes.number
};

export default Unit;
