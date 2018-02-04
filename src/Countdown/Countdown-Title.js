import React, { Component } from 'react';

export default class Title extends Component {
    render() {
        return <h3>{this.props.value}</h3>;
    }
}
