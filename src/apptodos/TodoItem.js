import React from 'react';

const TodoItem = (props) => {

  const { id, title, completed, handleChange, handleDelete } = props;
  
  return (
    <div className='todo-item'>
      <div className='todo-checkboxtitle'>
        <label className='todo-temp'>
          <input
            type='checkbox'
            name='completed'
            id={id}
            checked={completed}
            onChange={handleChange}
            className='todo-checkbox'
          />
        </label>
        <input
          type='text'
          name='title'
          id={id}
          value={title}
          onChange={handleChange}
          className={completed ? 'todo-title todo-title-done' : 'todo-title'}
          />
      </div>
      <button
        onClick={handleDelete}
        className='todo-delete'
      >
        <span
          id={id}
          className='material-icons'
        >close</span>
      </button>
    </div>
  );
};

export default TodoItem;