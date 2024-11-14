import React from 'react';
import Nav from '../../components/Nav/Nav';
import TodoList from '../../components/TodoList/TodoList'; // Adjust the path as necessary

const Todo = () => {
  return (
    <div>
      <Nav />
      <h1>Todo Page</h1>
      <TodoList />
    </div>
  );
}

export default Todo;
