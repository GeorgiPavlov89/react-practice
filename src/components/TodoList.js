
import Todo from "./Todo"


const TodoList = ({todos,setTodos , filteredTodos}) => {
    
    return (
        <div className="todo-container">
      <ul className="todo-list">
          {filteredTodos.map(todo=>(
              <Todo 
              filteredTodos={filteredTodos}
              todos={todos} 
              setTodos={setTodos} 
              key={todo.id}
              todo={todo} 
              text={todo.text} 
              id={todo.id}/>
          ))}
      </ul>
      
    </div>
    );
}


export default TodoList;