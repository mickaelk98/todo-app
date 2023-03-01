import React from "react";
import { Todo } from "../interface/TodoInterface";
import TodoItem from "./TodoItem";

interface Props {
  todoList: Todo[];
}

const TodoList: React.FC<Props> = ({ todoList }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
