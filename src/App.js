import React, { Component } from "react";
import Overview from "./components/Overview";
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			task: { text: "" },
			tasks: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.onSubmitTask = this.onSubmitTask.bind(this);
	}
	handleChange = (e) => {
		this.setState({
			task: {
				text: e.target.value,
			},
		});
	};

	onSubmitTask = (e) => {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.task),
			task: { text: "" },
		});
	};

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
					<button type="submit" task={"Submit"}>
						Add task
					</button>
				</form>
				<Overview tasks={tasks} />
			</div>
		);
	}
}

export default App;
