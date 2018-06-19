import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import TaskCards from './TaskCards';
var MOCKED_DATA = [
	{ task: 'Medications', time: '8:00pm', room: 'room 204' },
	{ task: 'Blood Test', time: '10:00pm', room: 'room 205' },
	{ task: 'Check Vitals', time: '10:30pm', room: 'room 206' },
	{ task: 'Medications', time: '11:15pm', room: 'room 207' }
];
class TaskList extends Component {
	state = { task: [] };

	componentWillMount() {
		MOCKED_DATA.then(response => this.setState({ tasks: response.data }));
	}

	renderTasks() {
		return this.state.albums.map(tasks => <TaskDetail keys={task.title} tasks={album} />);
	}

	render() {
		console.log(this.state);

		return <ScrollView>{this.renderTasks()}</ScrollView>;
	}
}

export default TaskList;
