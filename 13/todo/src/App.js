import React, { useState } from 'react';
import Header from './Header';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChange(event){
    setTodo(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
    setTodo('');
  }

  return (
     <div className="container">
      <header>
        <Header/>
        <form className="new-task" onSubmit={handleSubmit}>
          <input           
            name="text"
            placeholder="할 일을 입력하세요"
            value={todo}
            onChange = {handleChange}
          />
        </form>
      </header>
      <div id="result">
        {
          todos.map(todo => {
            return (<li>{todo}</li>);
          })
        }
      </div>
      </div>
  );
}

export default App;
