import React from 'react';
import './styleTodos.css';

import TodoList from './TodoList';

const AppTodos = () => {
  return (
    <div className='todo-app'>
      <h1>My Todos</h1>
      <TodoList />
    </div>
  );
};

export default AppTodos;

// [X] UI and CSS Styling
// [X] Set up state
// [X] Set up components to get data from state
// [X] Set up handle change method, to update state
// [ ] Delete --> Still buggy. What if I make it a button?
