import { useState } from "react";

export default function NewTask({ onAddProjectTaskClick }) {
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (!enteredTask.trim()) {
      return;
    }
    onAddProjectTaskClick(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="task-input-group">
      <input
        type="text"
        placeholder="Task description"
        onChange={handleChange}
        value={enteredTask}
      />
      <button onClick={handleClick}>Add task</button>
    </div>
  );
}
