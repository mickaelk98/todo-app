import React from "react";
import { Todo } from "../interface/TodoInterface";
import EditTodoItem from "./EditTodoItem";
import TodoItem from "./TodoItem";

interface Props {
  todoList: Todo[];
  toggleTodoEdit: (todoId: string) => void;
  toggleTodoDone: (todoId: string) => void;
}

const TodoList: React.FC<Props> = ({
  todoList,
  toggleTodoEdit,
  toggleTodoDone,
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
            key={todo._id}
            todo={todo}
          />
        )
      )}
    </ul>
  );
};

export default TodoList;
