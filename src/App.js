import React, {useState, useEffect} from 'react';
import './App.css';

// Components
import TodoListInput from './components/TodoListInput/TodoListInput';
import TodoItemsList from './components/TodoItemsList/TodoItemsList';

function App() {

  // hooks
  const [todoInput, setTodoInput] = useState('');
  const [items, setItems] = useState([]);

  const handleOnChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleCreateItemClick = () => {
    // Create Todo Item
    setItems((items) => [...items, { id: todoInput, name: todoInput }]);
    // Reset input
    setTodoInput('');
  };

  const removeItem = (e) => {
    // remove item
    const itemId = e.currentTarget.getAttribute('data-itemid');

    setItems((items) => items.filter(item => item.id !== itemId));
  };



  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoListInput onChange={handleOnChange} onClick={handleCreateItemClick} value={todoInput} />
      <TodoItemsList TodoItems={items} removeItem={removeItem}/>
    </div>
  );
}

export default App;

