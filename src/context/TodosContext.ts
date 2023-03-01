import { createContext } from "react";
import { Todo } from "../interface/TodoInterface";

interface TodosContextInterface {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodoDone: (todoId: string) => void;
  toggleTodoEdit: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
  editTodo: (todo: Todo) => void;
}

export const TodosContext = createContext<TodosContextInterface>({} as TodosContextInterface)
