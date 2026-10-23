import NewTask from "./NewTask";
import TaskList from "./TaskList";

export default function Tasks({
  onAddProjectTaskClick,
  onClearProjectTaskClick,
  tasks,
}) {
  return (
    <div className="tasks-container">
      <h2>Tasks</h2>
      <NewTask onAddProjectTaskClick={onAddProjectTaskClick} />
      <div>
        <TaskList
          tasks={tasks}
          onClearProjectTaskClick={onClearProjectTaskClick}
        />
      </div>
    </div>
  );
}
