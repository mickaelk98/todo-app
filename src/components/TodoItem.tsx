import React from "react";
import { Todo } from "../interface/TodoInterface";

interface Props {
  todo: Todo;
  toggleTodoEdit: (todoId: string) => void;
  toggleTodoDone: (todoId: string) => void;
}

const TodoItem: React.FC<Props> = ({
  todo,
  toggleTodoEdit,
  toggleTodoDone,
}) => {
  function handleClickToggleEdit() {
    toggleTodoEdit(todo._id);
  }

  function handleClickToggleDone() {
    toggleTodoDone(todo._id);
  }

  return (
    <li onClick={handleClickToggleDone} className="todo-item">
      {todo.done ? (
        <span style={{ textDecoration: "line-through" }} className="text">
          {todo.text}
        </span>
      ) : (
        <span className="text">{todo.text}</span>
      )}
      <span className="check">
        <i className="fa-solid fa-check"></i>
      </span>
      <span onClick={handleClickToggleEdit} className="edit">
        <i className="fa-solid fa-pen"></i>
      </span>
      <span className="delete">
        <i className="fa-solid fa-trash"></i>
      </span>
    </li>
  );
};

export default TodoItem;
