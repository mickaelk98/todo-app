import React, { useState } from "react";
import { Todo } from "../interface/TodoInterface";

interface Props {
  addTodo: (todo: Todo) => void;
}

const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function addNewTodo(e: React.FormEvent) {
    e.preventDefault();
    const todoObjetct: Todo = {
      _id: crypto.randomUUID(),
      text: inputValue,
      done: false,
      edit: false,
    };
    addTodo(todoObjetct);
    setInputValue("");
  }

  return (
    <form className="add-task-form" onSubmit={addNewTodo}>
      <div>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Ajouter une tache"
        />
        <button type="submit">Ajouter</button>
      </div>
    </form>
  );
};

export default AddTodo;
