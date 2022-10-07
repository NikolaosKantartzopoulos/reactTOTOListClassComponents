import React from "react";
import delIcon from "../delete-forever.png";

const Overview = (props) => {
	const { tasks } = props;
	return (
		<ul>
			{tasks.map((task) => {
				return (
					<li key={task.taskID}>
						{task.text} - {task.taskID}{" "}
						<img
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
