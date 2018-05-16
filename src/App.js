import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar nav-bar-background"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item container-todo">
              <img
                className="logo"
                src="/to-do.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
              TO DO List
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
        </nav>
        <section className="section">
          <div className="container container-todo">
            <h1 className="title">Add your To-Do</h1>
            <div className="todo-wrapper">
              <div className="field has-addons todo-control-wrapper">
                <div className="control todo-control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="To Do"
                  />
                </div>
                <div className="control">
                  <a className="button is-info is-medium">Add</a>
                </div>
              </div>
              <div className="box todo-box">
                <span className="icon is-small">
                  <i className="far fa-check-circle" aria-hidden="true" />
                </span>
                <span>My ToDo Content</span>
                <span class="icon is-small">
                  <i class="fas fa-trash-alt" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
