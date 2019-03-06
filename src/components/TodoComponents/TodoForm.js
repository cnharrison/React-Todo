import React, { Component } from "react";

function TodoForm(props) {
  console.log(props);
  return (
    <form onSubmit={props.formSubmitHandler}>
      <input
        name="task"
        value={props.task}
        onChange={props.inputChangeHandler}
        placeholder="what do you need to do"
      />
      <button type="submit">Add todo</button>
    </form>
  );
}

export default TodoForm;
