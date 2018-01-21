import React, {Component} from 'react';
import TaskRow from './TaskRow';

export default class TaskWindow extends Component {

    constructor(props) {
        super(props)
        this.projectNetwork = props.projectNetwork;
        this.projectId = props.projectId;
    }

    /*getTasks() {
        let opt = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        return window.fetch('https://cmtests.000webhostapp.com/gantt?projId=' + encodeURIComponent(this.projectId) + '&projNetwork=' + encodeURIComponent(this.projectNetwork), opt);
    }*/

    getTasks() {
        return Promise.resolve({
            tasks : [
                {
                    title: "Task title",
                    start: "01/02/18",
                    end: "03/02/18",
                    duration: "2",
                    percentage: "0",
                    subtasks: []
                },
                {
                    title: "Task title",
                    start: "01/02/18",
                    end: "03/02/18",
                    duration: "2",
                    percentage: "0",
                    subtasks: []
                },
                {
                    title: "Task title",
                    start: "01/02/18",
                    end: "03/02/18",
                    duration: "2",
                    percentage: "0",
                    subtasks: []
                },
                {
                    title: "Task title",
                    start: "01/02/18",
                    end: "03/02/18",
                    duration: "2",
                    percentage: "0",
                    subtasks: []
                }
            ]
        });
    }

    componentDidMount() {
        this.getTasks().then((res) => {
            if (res.ok || true) {
                //let state = this.parseResponse(res);
                let tasks = res;
                this.setState(tasks);
            } else {
                console.log("Error loading tasks.");
            }
        }, (err) => {
            console.log("Error fetching tasks.");
        });
    }

    addTask() {
        this.setState()
    }

    addMilestone() {

    }

    render() {
        return (
            <div id="task-window-root">
                <table id="tasks-table">
                    <thead id="tasks-table-header">
                        <tr>
                            <th>Tasks</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Duration</th>
                            <th>%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TaskRow />
                    </tbody>
                </table>
                <div>
                    <div onClick={() => addTask()}>Add task</div>
                    <div onClick={() => addMilestone()}>Add milestone</div>
                </div>
            </div>
        );
    }
}