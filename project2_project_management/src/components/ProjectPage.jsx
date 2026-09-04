import { useState } from "react";

export default function ProjectPage({ project, onClearProjectTaskClick }) {
  return (
    <div id="projectPage" className="page">
      <h1>{project.title}</h1>
      <div className="controls">
        <button>Delete</button>
      </div>
      <div className="project-info">
        <p className="due-date">{project.dueDate}</p>
        <p className="project-description">{project.description}</p>
      </div>

      <div className="tasks-container">
        <h2>Tasks</h2>
        <div className="task-input-group">
          <input type="text" placeholder="Task description" />
          <button>Add task</button>
        </div>
        <div>
          <ul>
            {project.tasks?.length ? (
              project.tasks.map((task) => (
                <li className="task" key={task}>
                  <p>{task}</p>
                  <button onClick={() => onClearProjectTaskClick(task)}>
                    Clear
                  </button>
                </li>
              ))
            ) : (
              <li>No tasks added</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
