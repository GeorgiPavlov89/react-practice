
import './App.css';
import { useState, useEffect } from  "react";
// Importing Components
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
 
  // State 
  const [inputText, setInputText] = useState ("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
 
  useEffect(() => {
    getLocalTodos();
  }, [])

  // USE EFFECT
 useEffect(() => {
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true ));
          break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false )); 
          break;
       default:
         setFilteredTodos(todos);
          break;   
    }
  }

  filterHandler();
  saveLocalTodos();

}, [todos,status])

  // Save to LOcal Storage

  const saveLocalTodos = () => {
   
      localStorage.setItem('todos', JSON.stringify([]));
 
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }else {
     let todoLocal = JSON.parse(localStorage.getItem('todos'));
     setTodos(todoLocal);
    }
  }

  return (
    <div className="App">

      <header>
      <h1>React Todo List</h1>
    </header>
    <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus} />
    <TodoList 
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos}
       />
    </div>
  );
}

export default App;
