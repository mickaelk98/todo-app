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

  return (
    <div className="App">
      <h1>todo app</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todoList={todos} />
    </div>
  );
};
export default App;
