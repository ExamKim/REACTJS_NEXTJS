import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./TodoApp.css";

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text }]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="todo-app">
            <h2>Todo List</h2>
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}

export default TodoApp;
