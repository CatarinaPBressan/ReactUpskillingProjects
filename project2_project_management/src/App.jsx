import { useState } from "react";

import CreateProjectPage from "./components/CreateProjectPage";
import NoProjectPage from "./components/NoProjectPage";
import ProjectPage from "./components/ProjectPage";
import Sidebar from "./components/Sidebar";

function App() {
  /*
  [{
    id: "uuid",
    title: "Project Title",
    dueDate: "2026-01-01",
    description: "Project description",
  }]
  */
  const [projects, setProjects] = useState([]);

  /*
  [{
    id: "uuid",
    text: "text"
    projectId: "projectId"
  }]
  */
  const [tasks, setTasks] = useState([]);

  /*
    null: No Project selected
    undefined: Creating Project
    {project}: Project page
   */
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (projectId) => {
    setSelectedProject((prevSelectedProject) => {
      if (prevSelectedProject && projectId === prevSelectedProject.id) {
        return null;
      }
      return projects.find((project) => project.id == projectId);
    });
  };

  const handleClearProjectTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
  };
  const handleAddProjectTask = (text) => {
    const task = {
      id: crypto.randomUUID(),
      text,
      projectId: selectedProject.id,
    };
    setTasks([...tasks, task]);
  };

  const handleDeleteProject = (projectId) => {
    setSelectedProject(null);
    setProjects(projects.filter((project) => project.id !== projectId));
  };

  const handleAddProjectClick = () => {
    setSelectedProject(undefined);
  };

  const handleCancelCreatingProjectClick = () => {
    setSelectedProject(null);
  };

  const handleCreateProjectClick = (projectData) => {
    const newProject = {
      ...projectData,
      tasks: [],
      id: crypto.randomUUID(),
    };
    setProjects([...projects, newProject]);
    setSelectedProject(newProject);
  };

  let content;
  if (selectedProject === null) {
    content = <NoProjectPage onAddProjectClick={handleAddProjectClick} />;
  } else if (selectedProject === undefined) {
    content = (
      <CreateProjectPage
        onCancelClick={handleCancelCreatingProjectClick}
        onCreateProjectClick={handleCreateProjectClick}
      />
    );
  } else {
    content = (
      <ProjectPage
        project={selectedProject}
        onClearProjectTaskClick={handleClearProjectTask}
        onAddProjectTaskClick={handleAddProjectTask}
        onDeleteProjectClick={handleDeleteProject}
        onDeselectProjectClick={handleSelectProject}
        tasks={tasks.filter((task) => task.projectId === selectedProject.id)}
      />
    );
  }

  return (
    <div id="pageContainer">
      <Sidebar
        projects={projects}
        onSelectProject={handleSelectProject}
        onAddProjectClick={handleAddProjectClick}
        selectedProjectId={selectedProject && selectedProject.id}
      />
      <main>{content}</main>
    </div>
  );
}

export default App;
