import React from "react";
import { Todo } from "../modules/todos";
import useTodoActions from "../hooks/useTodoActions";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const { onToggle, onRemove } = useTodoActions(todo.id);

  return (
    <li style={{ textDecoration: todo.done ? "line-through" : "none" }}>
      <span onClick={onToggle}>{todo.text}</span>
      <button onClick={onRemove}>X</button>
    </li>
  );
};

export default TodoItem;
