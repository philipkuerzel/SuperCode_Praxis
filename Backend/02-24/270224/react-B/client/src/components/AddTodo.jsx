import React, { useRef } from 'react'
import { useAppState } from '../context';

const AddTodo = () => {

    const { addTodo } = useAppState();
    const inputRef = useRef(null);
    
  return (
    <div className='inputAndAdd'>
        <input
            type="text"
            ref={inputRef}
            placeholder="Neue Aufgabe"
            onKeyUp={(event) => {
                if (event.key === 'Enter') {
                  addTodo(inputRef.current.value);
                  inputRef.current.value = '';
                }
            }}
        />
        <button
            id="addBtn"
            onClick={() => {
            addTodo(inputRef.current.value);
            inputRef.current.value = '';
            }}
        >
            +
        </button>
    </div>
  )
}

export default AddTodo