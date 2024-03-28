import React, { useState } from 'react';
import { useAppState} from '../context';

const TodoForm = () => {
  const { addTodo } = useAppState();
  const [todo, setTodo] = useState('');

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    addTodo(todo);
    setTodo('');
  };

  return (
    <div className='add'>
      <input
        type="text"
        value={todo}
        onChange={handleInputChange}
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            handleAddTodo();
          }
        }}
      />
      <button className='addBtn' onClick={handleAddTodo}>＋</button>
    </div>
  );
};

export default TodoForm;
