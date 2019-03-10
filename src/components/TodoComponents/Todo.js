import React, { Component } from "react";
import "./Todo.css"

function Todo(props) {
  let done = props.todo.done ? " done" : "";
  return (
    <div
      className={`todo ${done}`}
      key={props.todo.id}
      onClick={event => {
        props.toggleTask(props.todo.id);
      }}
    >
      <p>{props.todo.task}</p>
    </div>
  );
}

export default Todo;
