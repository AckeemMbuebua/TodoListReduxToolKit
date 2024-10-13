import { useDispatch } from "react-redux";
import { addTask } from "./redux";

const TaskForm = (props) => {
  // const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const tache = formData.get("task");
    dispatch(addTask(tache));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Ajouter une tâche" name="task" />
    </form>
  );
};

export default TaskForm;
