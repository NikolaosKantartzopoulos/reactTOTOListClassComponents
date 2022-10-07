import React, { Component } from "react";
import Overview from "./components/Overview";
import delpng from "./delete-forever.png";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			uniqueID: 1,
			task: {
				text: "",
				taskID: 0,
			},
			tasks: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.onSubmitTask = this.onSubmitTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
	}
	handleChange = (e) => {
		this.setState({
			task: { text: e.target.value, taskID: this.state.task.taskID },
		});
	};

	onSubmitTask = (e) => {
		e.preventDefault();
		if (this.state.task.text == "") return null;
		this.setState(
			() => ({
				tasks: this.state.tasks.concat(this.state.task),
				task: {
					text: "",
					taskID: this.state.uniqueID,
				},
				uniqueID: this.state.uniqueID + 1,
			})
			// () => {
			// 	console.log(this.state.tasks);
			// }
		);
	};

	deleteTask = (e) => {
		this.setState((state) => ({
			uniqueID: 1,
			task: {
				text: "",
				taskID: 0,
			},
			tasks: [],
		}));
	};

	handleDeleteOne(taskID) {
		console.log(`This is the taskID:  ${taskID}`);
		console.log(this.state.tasks);
		let temp = [];
	}

	render() {
		const { task, tasks } = this.state;
		return (
			<div>
				<form onSubmit={this.onSubmitTask}>
					<input
						onChange={this.handleChange}
						value={task.text}
						type="text"
						id="taskInput"
					/>
					<img src={delpng} onClick={this.deleteTask} />
					<button type="submit" task={"Submit"}>
						Add task
					</button>
				</form>
				<Overview tasks={tasks} handleDeleteOne={this.handleDeleteOne} />
			</div>
		);
	}
}

export default App;
