import React, { useState } from 'react';
import todoData from './todoData';
import TodoItem from './TodoItem';

const TodoList = () => {

  // Set state
  const [ data, setData ] = useState(todoData);

  // Handle Change
  const handleChange = (event) => {
    const { id, type, name, value , checked } = event.target;

    setData (prevData => {
      // Loop and look for the right object to update, using ID
      // Update the object accordingly
      const newData = prevData.map(item => {
        if (parseInt(id) === item.id) {
          type === 'checkbox' ?
            item[[name]] = checked :
            item[[name]] = value;
        }
          return item;
      })
      return newData;
    })
  };

  // For each todo item, render a <Todo Item /> component
  const disTodoList = data.map(item => {
    const { id, title, completed, deleted } = item;

    if (!deleted) {
      return <TodoItem
        key={id}
        id={id}
        title={title}
        completed={completed}
        deleted ={deleted}
        handleChange={handleChange}
      />
     }
    return null;     
  });

  return (
    <div>
      {disTodoList}
    </div>
  );
};

export default TodoList;