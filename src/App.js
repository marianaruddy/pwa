import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDo from "./components/ToDo";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ToDo />
      </div>
    );
  }
}

export default App;
