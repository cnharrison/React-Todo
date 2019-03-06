import React from 'react';
import Todo from "./TodoComponents/Todo";
import TodoForm from "./TodoComponents/TodoForm"
import TodoList from "./TodoComponents/TodoList"

class App extends React.Component {
 constructor() { 
   super();
   this.state = { 
     stateTodos: todos, 
     name: "",
     done: true,
   }
 }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;

