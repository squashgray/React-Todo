import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div
        className={`item${this.props.item.completed ? " completed" : ""}`}
        onClick={() => this.props.toggleCompleted(this.props.item.id)}
      >
        <p>{this.props.item.task}</p>
      </div>
    );
  }
}

export default Todo;
