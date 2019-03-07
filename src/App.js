import React from "react";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      task: ""
    };
  }

  inputChangeHandler = event => {
    this.setState({ task: event.target.value });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.task,
      id: new Date().getTime() / 1000,
      done: false
    };

    this.setState(prevState => {
      return {
        todos: [...prevState.todos, newTask],
      };
    });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm
          inputChangeHandler={this.inputChangeHandler}
          task={this.state.task}
          formSubmitHandler={this.formSubmitHandler}
        />
      </div>
    );
  }
}

export default App;
