import Input from "./Input";

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
          <menu className="controls">
            <button className="danger" onClick={onCancelClick}>
              Cancel
            </button>
            <button className="confirm" type="submit">
              Save
            </button>
          </menu>
          <Input label="Project Title" id="title" required />
          <Input label="Project Description" isTextArea id="description" />
          <Input type="date" label="Due date" id="dueDate" required />
        </form>
      </section>
    </div>
  );
}
