import React, { useState } from "react";
import { Todo } from "../interface/TodoInterface";

interface Props {
  todo: Todo;
  toggleTodoEdit: (todoId: string) => void;
  editTodo: (todo: Todo) => void;
}

const EditTodoItem: React.FC<Props> = ({ todo, toggleTodoEdit, editTodo }) => {
  const [inputValue, setInputValue] = useState<string>(todo.text);

  function handleClickToggleEdit() {
    toggleTodoEdit(todo._id);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleClickEditTodo() {
    editTodo({ ...todo, text: inputValue, edit: false });
  }

  return (
    <form className="edit-todo-form">
      <input type="text" onChange={handleChange} value={inputValue} />
      <span onClick={handleClickEditTodo} className="save">
        <i className="fa-solid fa-check"></i>
      </span>
      <button type="button" onClick={handleClickToggleEdit}>
        Annuler
      </button>
    </form>
  );
};

export default EditTodoItem;
