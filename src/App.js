
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
 
  // USE EFFECT
 useEffect(() => {

  filterHandler();

}, [todos,status])

  // Function
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
