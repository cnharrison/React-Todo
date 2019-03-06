import React, { Component } from "react";
import Todo from "./Todo";

function TodoList(props) {
    return (
        <div>
            <h1>Todo list yo</h1>
            {props.todos.map(todo => ( 
                <Todo todo={todo}/>
            ))}
        </div>
    )
};

export default TodoList; 