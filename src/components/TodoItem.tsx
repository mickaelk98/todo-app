import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { Todo } from "../interface/TodoInterface";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const { toggleTodoEdit, toggleTodoDone, deleteTodo } =
    useContext(TodosContext);

  function handleClickToggleEdit() {
    toggleTodoEdit(todo._id);
  }

  function handleClickToggleDone() {
    toggleTodoDone(todo._id);
  }

  function handleClickDeleteTodo() {
    deleteTodo(todo._id);
  }

  return (
    <li className="todo-item">
      {todo.done ? (
        <span style={{ textDecoration: "line-through" }} className="text">
          {todo.text}
        </span>
      ) : (
        <span className="text">{todo.text}</span>
      )}
      <span onClick={handleClickToggleDone} className="check">
        <i className="fa-solid fa-check"></i>
      </span>
      <span onClick={handleClickToggleEdit} className="edit">
        <i className="fa-solid fa-pen"></i>
      </span>
      <span onClick={handleClickDeleteTodo} className="delete">
        <i className="fa-solid fa-trash"></i>
      </span>
    </li>
  );
};

export default TodoItem;
