import React from "react";

const Task = function(props) {
  return (
    <div className="box todo-box">
      <span className="icon is-small">
        <i className="far fa-check-circle" aria-hidden="true" />
      </span>
      <span>{props.taskData.text}</span>
      <span className="icon is-small">
        <i className="fas fa-trash-alt" aria-hidden="true" />
      </span>
    </div>
  );
};

export default Task;
