import { useState } from "react";

const TodoItem = ({ addTodo }) => {
  const [todo, setTodo] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={submitHandler}>
      <p>
        <input
          type="text"
          defaultValue={todo}
          onChange={(e) => setTodo(e.target.value)}
        />{" "}
        <button>Add Item</button>
      </p>
    </form>
  );
};

export default TodoItem;
