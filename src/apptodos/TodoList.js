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
      // Update the object accordingly-- edit and delete
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

  // Handle Delete
  const handleDelete = (event) => {
    const { id } = event.target;
    console.log('delete', id);

    setData (prevData => {
      return prevData.filter(item => item.id !== parseInt(id));
      })
  }

  // Handle New Item
  const handleAdd = () => {

    setData (prevData => {
      const newItemArray = [{
          id: prevData[prevData.length-1].id + 1,
          title: '',
          completed: false,
          deleted: false
        }];
      prevData = prevData.concat(newItemArray);
      return prevData;
    })
  };

  // For each todo item, render a <Todo Item /> component
  const disTodoList = data.map(item => {
    const { id, title, completed } = item;
    return <TodoItem
      key={id}
      id={id}
      title={title}
      completed={completed}
      handleChange={handleChange}
      handleDelete={handleDelete}
    />
  });
  
  console.log(data);

  return (
    <div>
      {disTodoList}
      <button onClick={handleAdd} className='todo-add'>New Todo</button>
    </div>
  );
};

export default TodoList;