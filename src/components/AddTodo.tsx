import { Todo } from "../interface/TodoInterface";

const AddTodo = ({ addTodo }: { addTodo: (todo: Todo) => void }) => {
  return (
    <form className="add-task-form">
      <input type="text" placeholder="Ajouter une tache" />
      <button>Ajouter</button>
    </form>
  );
};

export default AddTodo;
