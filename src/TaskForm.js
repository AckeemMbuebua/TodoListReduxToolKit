import { useState } from "react";

const TaskForm = (props) => {
  // const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const elements = form.elements;
    const formData = new FormData(form);
    const tache = formData.get("task");
    props.addTask(tache);

    form.reset();
    // setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Ajouter une tâche" name="task" />
    </form>
  );
};

export default TaskForm;
