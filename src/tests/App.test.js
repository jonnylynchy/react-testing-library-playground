import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "../App";

test("renders header", () => {
  render(<App />);
  const headerElement = screen.getByText(/React Testing/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders list of todos when entering items and clicking add item", () => {
  // render entire app
  render(<App />);

  // select the todo text input and button to add todo
  const input = screen.getByRole("textbox");
  const button = screen.getByText("Add Item");

  // add a few items
  fireEvent.change(input, { target: { value: "todo item 1" } });
  fireEvent.click(button);

  fireEvent.change(input, { target: { value: "todo item 2" } });
  fireEvent.click(button);

  fireEvent.change(input, { target: { value: "todo item 3" } });
  fireEvent.click(button);

  // get list of items
  const list = screen.getByRole("list", {
    name: /todos/i,
  });

  // get todos from within the list
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");

  // assert there are 3 items
  expect(items.length).toBe(3);
});
