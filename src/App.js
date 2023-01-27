import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const removeTodo = (index) => {
    const reducedTodos = [...todoList];
    reducedTodos.splice(index, 1);
    setTodoList(reducedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">React Testing</header>
      <TodoItem addTodo={addTodo} />
      <TodoList removeTodo={removeTodo} todoList={todoList} />
    </div>
  );
}

export default App;
