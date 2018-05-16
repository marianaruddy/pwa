import React from "react";

const ToDoInput = function(props) {
  return (
    <div className="field has-addons todo-control-wrapper">
      <div className="control todo-control">
        <input
          className="input is-medium"
          value={props.value}
          onChange={e => props.onChangeText(e.target.value)}
          type="text"
          placeholder="To Do"
        />
      </div>
      <div className="control">
        <a
          onClick={() => props.onAddTask()}
          className="button is-info is-medium"
        >
          Add
        </a>
      </div>
    </div>
  );
};

export default ToDoInput;
