import Tasks from "./Tasks";

export default function ProjectPage({
  project,
  onClearProjectTaskClick,
  onDeleteProjectClick,
  onAddProjectTaskClick,
  onDeselectProjectClick,
  tasks,
}) {
  return (
    <div id="projectPage" className="page">
      <div className="controls">
        <button onClick={() => onDeselectProjectClick(project.id)}>X</button>
      </div>
      <h1>{project.title}</h1>
      <div className="controls">
        <button onClick={() => onDeleteProjectClick(project.id)}>Delete</button>
      </div>
      <div className="project-info">
        <p className="due-date">{project.dueDate}</p>
        <p className="project-description">{project.description}</p>
      </div>

      <Tasks
        onClearProjectTaskClick={onClearProjectTaskClick}
        onAddProjectTaskClick={onAddProjectTaskClick}
        tasks={tasks}
      />
    </div>
  );
}
