// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [todo, setTodo] = useState('');
//   const [counter, setCounter] = useState(0);

//   const addTodo = () => {
//     if (todo !== '' && !todos.some(t => t.text === todo)) {
//       const newTodo = { text: todo, done: false };
//       setTodos([...todos, newTodo]);
//       setTodo('');
//       setCounter(counter + 1);
//     } else {
//       window.alert('Aufgabe existiert bereits oder ist leer! 🤔');
//     }
//   };

//   const delTask = (index) => {
//     if (todos[index].done) {
//       const updatedTodos = [...todos];
//       updatedTodos.splice(index, 1);
//       setTodos(updatedTodos);
//       setCounter(updatedTodos.filter(todo => !todo.done).length);
//     } else {
//       alert("Du musst diese Aufgabe zuerst erledigen, wenn du sie löschen willst 😁");
//     }
//   };


//   const taskDone = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].done = !updatedTodos[index].done;
//     setTodos(updatedTodos);
//     setCounter(updatedTodos.filter(todo => !todo.done).length);
//   };

//   return (
//     <section className='app-container'>
//       <h1>toDo-App</h1>
//         <div className='add'>
//           <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} onKeyUp={(event) =>{
//             if (event.key === 'Enter') {
//               addTodo()};
//           }}/>
//           <button className='addBtn' onClick={addTodo}>＋</button>
//         </div>
//         <div className='output'>
//           <p>todos: {counter}</p>
//           <ul>
//             {todos.map((todo, index) => (
//               <li key={index}>
//                 <input className='checkbox' type="checkbox" checked={todo.done} onChange={() => taskDone(index)} />
//                 <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
//                 <button className='delBtn' onClick={() => delTask(index)}>🗑️</button>
//               </li>
//             ))}
//           </ul>
//       </div>
//     </section>
//   );
// };

// export default App;


import React from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import './App.css';

const App = () => {
  return (
      <section className='app-container'>
        <h1>toDo-App</h1>
        <TodoForm />
        <TodoList />
      </section>
  );
};

export default App;
