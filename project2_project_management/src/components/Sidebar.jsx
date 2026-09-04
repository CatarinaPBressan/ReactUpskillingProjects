export default function Sidebar({ projects, onSelectProject }) {
  return (
    <aside>
      <h3>Your Projects</h3>
      <button>+ Add Project</button>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <button onClick={() => onSelectProject(project.title)}>
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
