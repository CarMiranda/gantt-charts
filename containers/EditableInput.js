import React, {Component} from 'react';

export default class EditableInput extends Component {
    render() {
        return (
            <input type="text" id={this.props.id} placeholder={this.props.placeholder} className="editable-input" />
        );
    }
}