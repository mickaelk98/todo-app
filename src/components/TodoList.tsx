import React from "react";
import { Todo } from "../interface/TodoInterface";
import EditTodoItem from "./EditTodoItem";
import TodoItem from "./TodoItem";

interface Props {
  todoList: Todo[];
  toggleTodoEdit: (todoId: string) => void;
  toggleTodoDone: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
}

const TodoList: React.FC<Props> = ({
  todoList,
  toggleTodoEdit,
  toggleTodoDone,
  deleteTodo,
}) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodoItem
            toggleTodoEdit={toggleTodoEdit}
            key={todo._id}
            todo={todo}
          />
        ) : (
          <TodoItem
            toggleTodoEdit={toggleTodoEdit}
            toggleTodoDone={toggleTodoDone}
            deleteTodo={deleteTodo}
            key={todo._id}
            todo={todo}
          />
        )
      )}
    </ul>
  );
};

export default TodoList;
