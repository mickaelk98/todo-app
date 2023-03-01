import React, { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";
import { Todo } from "../interface/TodoInterface";

const AddTodo: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { addTodo } = useContext(TodosContext);

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
