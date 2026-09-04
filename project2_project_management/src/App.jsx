function App() {
  return (
    <div id="pageContainer">
      <aside>
        <h1>Your Projects</h1>
        <button>+ Add Project</button>
        <ul>
          <li>
            <button>Project 1</button>
          </li>
        </ul>
      </aside>
      <main>
        <div id="noProjectPage" className="page">
          <div className="center">
            <h1>No Project Selected</h1>
            <h2>Select or create a project</h2>
            <button>Create a Project</button>
          </div>
        </div>
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
        <div id="projectPage" className="page">
          <h1>Project Title</h1>
          <div className="controls">
            <button>Delete</button>
          </div>
          <div className="project-info">
            <p className="due-date">04/09/2026</p>
            <p className="project-description">Project description</p>
          </div>

          <div className="tasks-container">
            <h2>Tasks</h2>
            <div className="task-input-group">
              <input type="text" placeholder="Task description" />
              <button>Add task</button>
            </div>
            <div>
              <ul>
                <li>No tasks added</li>
                <li className="task">
                  <p>Implement the React Project Management project</p>
                  <button>Clear</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
