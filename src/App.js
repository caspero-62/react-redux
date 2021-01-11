import React, {useState} from 'react';
import AddForm from './AddForm';
import Todos from './Todos';

const App = () => {

  const [todos, modifyTodos] = useState([
    {id:1, content: 'buy some milk'},
    {id: 2, content: 'play mario kart'}
  ]);

  const deleteTodo = (id) => {
    let newTodos = todos.filter(todo => {
      return todo.id !== id;
    });

    modifyTodos(newTodos);
  }

  const addTodo = (todo) => {
    todo.id = Math.random() * 100;
    let newTodos = [...todos, todo];

    modifyTodos(newTodos);
  }

  return (
    <div className='todo-app container'>
      <h1 className='center blue-text'>Todo's</h1>
      <Todos todoList={todos} deleteTodo={deleteTodo}/>
      <AddForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
