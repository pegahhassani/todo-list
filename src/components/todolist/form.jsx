import { useState } from "react";
import { nanoid } from "nanoid";

const Form = ({ onTaskSubmit }) => {
  const [task, setTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    onTaskSubmit({
      id: nanoid(),
      task,
    });
    setTask("");
  };

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        placeholder="What are you going to do?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
