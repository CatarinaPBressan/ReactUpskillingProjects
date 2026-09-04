function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "stretch",
        border: "1px solid green",
        height: "98vh",
      }}
    >
      <aside
        style={{
          border: "1px solid red",
          height: "100%",
          flex: "20%",
          padding: "1rem",
        }}
      >
        <h1>Your Projects</h1>
        <button>+ Add Project</button>
        <ul>
          <li>Project 1</li>
        </ul>
      </aside>
      <main
        style={{
          border: "1px solid blue",
          flex: "80%",
          padding: "1rem",
          overflowY: "auto",
          height: "100%",
        }}
      >
        <div id="noProjectPage">
          <h1>No Project Selected</h1>
          <h2>Select or create a project</h2>
          <button>Create a Project</button>
        </div>
        <div id="createProjectPage">
          <h1>New Project</h1>
          <div>
            <button>Cancel</button>
            <button>Save</button>
          </div>
          <section className="inputs">
            <div className="input-Group">
              <label htmlFor="title">Project title</label>
              <input type="text" id="title" />
            </div>
            <div className="input-Group">
              <label htmlFor="description">Project description</label>
              <textarea id="description" />
            </div>
            <div className="input-Group">
              <label htmlFor="dueDate">Due date</label>
              <input type="date" id="dueDate" />
            </div>
          </section>
        </div>
        <div id="projectPage">
          <h1>Project Title</h1>
          <div>
            <button>Delete</button>
          </div>
          <div>04/09/2026</div>
          <div>
            <p>Project description</p>
          </div>
          <div>
            <h2>Tasks</h2>
            <div>
              <input type="text" placeholder="Task description" />
              <button>Add task</button>
            </div>
            <div>
              <p>No tasks added</p>
              <div>
                <p>Task 1</p> <button>Clear</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
