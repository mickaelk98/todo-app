import React from "react";
import { Todo } from "../interface/TodoInterface";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <li className="todo-item">
      <span className="text">{todo.text}</span>
      <span className="check">
        <i className="fa-solid fa-check"></i>
      </span>
      <span className="edit">
        <i className="fa-solid fa-pen"></i>
      </span>
      <span className="delete">
        <i className="fa-solid fa-trash"></i>
      </span>
    </li>
  );
};

export default TodoItem;
