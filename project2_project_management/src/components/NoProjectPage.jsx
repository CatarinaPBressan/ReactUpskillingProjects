export default function NoProjectPage({ onAddProjectClick }) {
  return (
    <div id="noProjectPage" className="page">
      <div className="center">
        <h1>No Project Selected</h1>
        <h2>Select or create a project</h2>
        <button onClick={onAddProjectClick}>Create a Project</button>
      </div>
    </div>
  );
}
