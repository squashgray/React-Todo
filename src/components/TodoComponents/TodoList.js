import React from "react";
import Todo from "./Todo";
import "./Todo.css";

export default function ToDoList(props) {
  return (
    <div className="list">
      <h2>Current Tasks</h2>
      {props.list.map(item => (
        <Todo
          key={item.id}
          item={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  );
}
