import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import TodosProvider from "./components/TodosProvider";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>todo app</h1>
      <TodosProvider>
        <AddTodo />
        <TodoList />
        <Filter />
      </TodosProvider>
    </div>
  );
};
export default App;
