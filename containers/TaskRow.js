import React, {Component} from 'react';
import EditableInput from './EditableInput';

export default class TaskRow extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <tr>
                <td><EditableInput placeholder=""/></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    }
}