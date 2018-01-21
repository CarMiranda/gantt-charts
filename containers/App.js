import React, {Component} from 'react';
import EditableInput from './EditableInput';
import ReadOnlyInput from './ReadOnlyInput';
import TaskWindow from './TaskWindow';

export default class App extends Component {
    render() {
        return (
            <div id="root">
                <div id="project-information">
                    <EditableInput id="project-title" placeholder="Project title" />
                    <ReadOnlyInput id="project-author" value="Author" />
                    <ReadOnlyInput id="project-network" value="Network" /> 
                </div>
                <div id="project-windows">
                    <TaskWindow projectId="0001" projectNetwork="AJIR"/>
                </div>
            </div>
        );
    }
}