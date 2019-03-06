import React, { Component } from "react";

function Todo(props) {
  return (
    <div>
      <p>todo component checking in</p>
      <p>{props.todo.task}</p>
    </div>
  );
}

export default Todo;
