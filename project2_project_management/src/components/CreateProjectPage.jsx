export default function CreateProjectPage({
  onCancelClick,
  onCreateProjectClick,
}) {
  return (
    <div id="createProjectPage" className="page">
      <h1>New Project</h1>

      <section className="inputs">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget));
            onCreateProjectClick(data);
          }}
        >
          <div className="controls">
            <button onClick={onCancelClick}>Cancel</button>
            <button type="submit">Save</button>
          </div>
          <div className="input-group">
            <label htmlFor="title">Project title</label>
            <input type="text" id="title" required name="title" />
          </div>
          <div className="input-group">
            <label htmlFor="description">Project description</label>
            <textarea id="description" name="description" />
          </div>
          <div className="input-group">
            <label htmlFor="dueDate">Due date</label>
            <input type="date" id="dueDate" required name="dueDate" />
          </div>
        </form>
      </section>
    </div>
  );
}
