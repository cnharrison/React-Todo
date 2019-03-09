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

  toggleTask = taskId => {
    this.setState(prevState => {
      console.log(prevState.todos);
      return {
        todos: prevState.todos.map(task => {
          if (task.id === taskId) {
            console.log("toggling task")
            console.log(task.name)
            console.log(task.id)
            console.log(task.done)
            return {
              task: task.task,
              id: task.id,
              done: !task.done
            };
          } else {
            console.log("returning task")
            return task;
          }
        })
      };
    });
  };

  inputChangeHandler = event => {
    this.setState({ task: event.target.value });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.task,
      id: Date.now(),
      done: false
    };

    this.setState(prevState => {
      return {
        todos: [...prevState.todos, newTask]
      };
    });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleTask={this.toggleTask} />
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
