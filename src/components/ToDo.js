import React from "react";
import ToDoTitle from "./ToDoTitle";
import ToDoInput from "./ToDoInput";
import TaskList from "./TaskList";

class ToDo extends React.Component {
  state = {
    addTaskText: "robson",
    taskList: [
      {
        text: "arnaldo"
      },
      {
        text: "antunes"
      }
    ]
  };

  changeText(taskText) {
    this.setState({ addTaskText: taskText });
  }

  addTask() {
    const newTask = {
      text: this.state.addTaskText
    };
    const newTaskList = this.state.taskList.concat(newTask);

    this.setState({
      addTaskText: "",
      taskList: newTaskList
    });
  }

  render() {
    return (
      <section className="section">
        <div className="container container-todo">
          <ToDoTitle />
          <div className="todo-wrapper">
            <ToDoInput
              value={this.state.addTaskText}
              onChangeText={text => this.changeText(text)}
              onAddTask={() => this.addTask()}
            />
            <TaskList taskList={this.state.taskList} />
          </div>
        </div>
      </section>
    );
  }
}

export default ToDo;
