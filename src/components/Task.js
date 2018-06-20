import React from "react";

const Task = function(props) {
  const todoBoxInitialClasses = "box todo-box";
  const todoBoxClasses = props.taskData.completed
    ? todoBoxInitialClasses + " todo-box-completed"
    : todoBoxInitialClasses;

  return (
    <div className={todoBoxClasses}>
      <span
        className="icon is-small"
        onClick={() => props.onCompleteTask(props.index)}
      >
        <i className="far fa-check-circle" aria-hidden="true" />
      </span>
      <span>{props.taskData.text}</span>
      <span
        className="icon is-small"
        onClick={() => props.onRemoveTask(props.index)}
      >
        <i className="fas fa-trash-alt" aria-hidden="true" />
      </span>
    </div>
  );
};

export default Task;
