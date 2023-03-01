import { useState } from "react";
import "./App.css";
import { Todo } from "./interface/TodoInterface";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
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

  return (
    <div className="App">
      <h1>todo app</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todoList={todos}
        toggleTodoEdit={toggleTodoEdit}
        toggleTodoDone={toggleTodoDone}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};
export default App;
