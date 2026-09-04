export default function CreateProjectPage({}) {
  return (
    <div id="createProjectPage" className="page">
      <h1>New Project</h1>

      <section className="inputs">
        <div className="controls">
          <button>Cancel</button>
          <button>Save</button>
        </div>
        <div className="input-group">
          <label htmlFor="title">Project title</label>
          <input type="text" id="title" />
        </div>
        <div className="input-group">
          <label htmlFor="description">Project description</label>
          <textarea id="description" />
        </div>
        <div className="input-group">
          <label htmlFor="dueDate">Due date</label>
          <input type="date" id="dueDate" />
        </div>
      </section>
    </div>
  );
}
