import React from 'react';
import { useAppState } from '../context';

const TodoList = () => {
  const { todos, counter, taskDone, delTask } = useAppState();

  return (
    <div className='output'>
      <p>todos: {counter}</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              className='checkbox'
              type="checkbox"
              checked={todo.done}
              onChange={() => taskDone(index)}
            />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button className='delBtn' onClick={() => delTask(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
