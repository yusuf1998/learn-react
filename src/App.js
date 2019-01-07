import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
// import TodoList from "./TodoList";

const numbers = [1, 2, 3];
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        {numbers.map(item => {
          return <Header />;
        })}
      </div>
    );
  }
}

export default App;
