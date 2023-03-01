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
    <form>
      <p>edit todo item</p>
      <input type="text" />
      <button>
        <i className="fa-solid fa-check"></i>
      </button>
      <button onClick={handleClickToggleEdit}>Annuler</button>
    </form>
  );
};

export default EditTodoItem;
