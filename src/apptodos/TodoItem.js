import React from 'react';

const TodoItem = (props) => {

  const { id, title, completed, deleted, handleChange } = props;
  
  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        name='completed'
        id={id}
        checked={completed}
        onChange={handleChange}
        className='todo-checkbox'
      />
      <input
        type='text'
        name='title'
        id={id}
        value={title}
        onChange={handleChange}
        className={completed ? 'todo-title todo-title-done' : 'todo-title'}
        />
      
      <label>
        <input
          type='checkbox'
          name='deleted'
          id={id}
          checked={deleted}
          onChange={handleChange}
          className='hidden'
        />
        <span className='material-icons todo-delete'>close</span>
      </label>
    </div>
  );
};

export default TodoItem;