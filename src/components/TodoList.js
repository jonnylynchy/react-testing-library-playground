const TodoList = ({ todoList, removeTodo }) => {
  return (
    <ul aria-label="todos">
      {todoList.map((todo, index) => (
        <li alt={`todo item ${todo}`} key={`todo-item-${index}`}>
          {todo} <button onClick={() => removeTodo(index)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
