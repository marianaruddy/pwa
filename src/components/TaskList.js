import React from "react";
import Task from "./Task";

const TaskList = function(props) {
  const renderedTasks = props.taskList.map(task => <Task taskData={task} />);

  return <div>{renderedTasks}</div>;
};

export default TaskList;
