import React from "react";
import { Todo } from "../interface/TodoInterface";

interface Props {
  todo: Todo;
  toggleTodoEdit: (todoId: string) => void;
}

const EditTodoItem: React.FC<Props> = ({ todo, toggleTodoEdit }) => {
  function handleClickToggleEdit() {
    toggleTodoEdit(todo._id);
  }

  return (
    <form className="edit-todo-form">
      <input type="text" value={todo.text} />
      <span className="save">
        <i className="fa-solid fa-check"></i>
      </span>
      <button onClick={handleClickToggleEdit}>Annuler</button>
    </form>
  );
};

export default EditTodoItem;
