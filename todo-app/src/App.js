import React, { useState } from 'react';
import { addTodo, checkTodo, deleteTodo } from './helper';

import './style.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  // console.log(completed);

  return (
    <div className="todo__container">
      <h1>TODO APPLICATION</h1>
      <section className="input__container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => addTodo(inputValue, todos, setTodos, setInputValue)}
        >
          Add Task
        </button>
      </section>
      <section className="list__container">
        {todos.map((v) => {
          // console.log(v)
          return (
            <div
              className={`list__item ${
                completed.includes(v.id) ? 'checked__list__item' : ''
              } `}
              key={v.id}
            >
              <p>{v.todoText}</p>
              <section>
                <button
                  className="cm__btn danger"
                  onClick={() => deleteTodo(v.id, todos, setTodos)}
                >
                  Delete
                </button>
                <button
                  className="cm__btn check"
                  onClick={() => checkTodo(v.id, completed, setCompleted)}
                >
                  Done
                </button>
              </section>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default App;

// List and key
// Form handling (50%)
