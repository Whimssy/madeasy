import React, { useState } from "react";

function TaskChecklist({ type }) {
  const tasks = [
    "Mopping",
    "Sweeping",
    "Dusting",
    "Trash Removal",
    "Utensils Cleaning",
  ];

  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleChange = (task) => {
    setSelectedTasks((prev) =>
      prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task]
    );
  };

  return (
    <div className="checklist-container">
      <h2>{type} Cleaning Tasks</h2>
      {tasks.map((task) => (
        <label key={task}>
          <input
            type="checkbox"
            value={task}
            checked={selectedTasks.includes(task)}
            onChange={() => handleChange(task)}
          />
          {task}
        </label>
      ))}
      <p>✅ Selected: {selectedTasks.join(", ")}</p>
    </div>
  );
}

export default TaskChecklist;