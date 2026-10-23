export default function Sidebar({
  projects,
  onSelectProject,
  onAddProjectClick,
  selectedProjectId,
}) {
  return (
    <aside id="sidebar">
      <h3>Your Projects</h3>
      <button className="create-project-button" onClick={onAddProjectClick}>
        + Add Project
      </button>
      <ul style={{ width: "100%" }}>
        {projects.map((project) => {
          let buttonClassNames = "";
          if (selectedProjectId && project.id == selectedProjectId) {
            buttonClassNames += " selected-project-button";
          }

          return (
            <li key={project.id}>
              <button
                className={buttonClassNames}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
