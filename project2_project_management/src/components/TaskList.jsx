export default function TaskList({ tasks, onClearProjectTaskClick }) {
  return (
    <ul>
      {tasks?.length ? (
        tasks.map((task) => (
          <li className="task" key={task.id}>
            <p>{task.text}</p>
            <button onClick={() => onClearProjectTaskClick(task)}>Clear</button>
          </li>
        ))
      ) : (
        <li>No tasks added</li>
      )}
    </ul>
  );
}
