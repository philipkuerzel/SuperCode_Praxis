import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
export const useAppState = () => useContext(StateContext);


export const AppStateProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [counter, setCounter] = useState(0);

  const addTodo = (todo) => {
    if (todo !== '' && !todos.some(t => t.text === todo)) {
      const newTodo = { text: todo, done: false };
      setTodos([...todos, newTodo]);
      setCounter(counter + 1);
    } else {
      window.alert('Aufgabe existiert bereits oder ist leer! 🤔');
    }
  };

  const delTask = (index) => {
    if (todos[index].done) {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
      setCounter(updatedTodos.filter(todo => !todo.done).length);
    } else {
      alert("Du musst diese Aufgabe zuerst erledigen, wenn du sie löschen willst 😁");
    }
  };

  const taskDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
    setCounter(updatedTodos.filter(todo => !todo.done).length);
  };

  return (
    <StateContext.Provider value={{ todos, counter, addTodo, delTask, taskDone }}>
      {children}
    </StateContext.Provider>
  )
}