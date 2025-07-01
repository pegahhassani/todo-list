import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChangeInput = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="container">
        <h1>What has to be done!</h1>

        <div>
          <input
            type="text"
            placeholder="What are you going to do?"
            value={newTask}
            onChange={handleChangeInput}
          />
          <button className="add-btn" onClick={addTask}>
            Add
          </button>
        </div>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="task-item">{task}</span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
