import { render, screen, within } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("should render list of 3 todo items", async () => {
  // Render 3 todos
  const todoList = ["take out garbage", "wash clothes", "buy stuff"];
  render(<TodoList todoList={todoList} />);

  // query to get list of todos
  const list = screen.getByRole("list", {
    name: /todos/i,
  });

  // get todos from within the list
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");

  // assert there are 3 items
  expect(items.length).toBe(3);
});
