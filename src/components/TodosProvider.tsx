import React, { ReactNode, useState } from "react";
import { TodosContext } from "../context/TodosContext";
import { Todo } from "../interface/TodoInterface";

const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(todo: Todo) {
    setTodos([...todos, todo]);
  }

  function toggleTodoDone(todoId: string) {
    setTodos(
      todos.map((todo) =>
        todo._id === todoId ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function toggleTodoEdit(todoId: string) {
    setTodos(
      todos.map((todo) =>
        todo._id === todoId ? { ...todo, edit: !todo.edit } : todo
      )
    );
  }

  function deleteTodo(todoId: string) {
    setTodos(todos.filter((todo) => todo._id !== todoId));
  }

  function editTodo(newTodo: Todo) {
    setTodos(todos.map((todo) => (todo._id === newTodo._id ? newTodo : todo)));
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodoDone,
        toggleTodoEdit,
        deleteTodo,
        editTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
