import React from "react";
import delIcon from "../delete-forever.png";
import "../style.css";

const Overview = (props) => {
	const { tasks } = props;
	return (
		<ul>
			{tasks.map((task) => {
				return (
					<li key={task.taskID} className="formatTask">
						<span>{task.taskID}</span>
						<span>{task.text}</span>
						<img
							className="noSelect"
							style={{ width: "20px" }}
							src={delIcon}
							onClick={() => props.handleDeleteOne(task.taskID)}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default Overview;
