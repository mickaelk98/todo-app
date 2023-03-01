import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import EditTodoItem from "./EditTodoItem";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const { todos } = useContext(TodosContext);

  return (
    <ul className="todo-list">
      {todos.map((todo) =>
        todo.edit ? (
          <EditTodoItem key={todo._id} todo={todo} />
        ) : (
          <TodoItem key={todo._id} todo={todo} />
        )
      )}
    </ul>
  );
};

export default TodoList;
