import React, { Component } from "react";

function Todo(props) {
  return (
    <div
      onClick={event => {
        props.toggleTask(props.todo.id);
      }}
    >
      <p>{props.todo.task}</p>
    </div>
  );
}

export default Todo;
