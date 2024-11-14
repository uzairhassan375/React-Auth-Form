import React, { useEffect, useState } from "react";
import axios from "axios";
import "./td.css";  // Import the CSS file for styling

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos/";

  const fetchTodos = async () => {
    try {
      const response = await axios.get(url);
      setTodos(response.data);
    } catch (error) {
      console.error("Error occurred while fetching todos", error.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> 
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? '✓' : '✗'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
