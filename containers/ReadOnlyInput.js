import React, {Component} from 'react';

export default class UneditableInput extends Component {
    render() {
        return <input type="text" id={this.props.id} value={this.props.value} disabled />
    }
}