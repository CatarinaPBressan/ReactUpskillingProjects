import { useState } from "react";

import CreateProjectPage from "./components/CreateProjectPage";
import NoProjectPage from "./components/NoProjectPage";
import ProjectPage from "./components/ProjectPage";
import Sidebar from "./components/Sidebar";

/*
projects:
[{
  title: "Project Title",
  dueDate: "2026-01-01",
  description: "Project description",
  tasks: ["Implement the React Project Management project"]
}]*/
function App() {
  const [projects, setProjects] = useState([]);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(undefined);

  const handleSelectProject = (projectTitle) => {
    setIsCreatingProject(false);
    setSelectedProject(
      projects.find((project) => project.title === projectTitle),
    );
  };

  const handleClearProjectTask = (task) => {
    console.log(task);
    setSelectedProject((prevSelectedProject) => {
      console.log(prevSelectedProject.tasks.filter((_task) => _task !== task));
    });
  };
  const handleAddProjectTask = (task) => {
    console.log(task);
  };

  const handleDeleteProject = (projectTitle) => {
    setSelectedProject(undefined);
    setProjects([
      ...projects.filter((project) => project.title !== projectTitle),
    ]);
  };

  const handleAddProjectClick = () => {
    setSelectedProject(undefined);
    setIsCreatingProject(true);
  };

  const handleCancelCreatingProjectClick = () => {
    setIsCreatingProject(false);
  };

  const handleCreateProjectClick = (projectData) => {
    const newProject = { ...projectData, tasks: [] };
    setProjects([...projects, newProject]);
    setIsCreatingProject(false);
  };

  return (
    <div id="pageContainer">
      <Sidebar
        projects={projects}
        onSelectProject={handleSelectProject}
        onAddProjectClick={handleAddProjectClick}
      />
      <main>
        {!selectedProject && !isCreatingProject && (
          <NoProjectPage onAddProjectClick={handleAddProjectClick} />
        )}
        {!selectedProject && isCreatingProject && (
          <CreateProjectPage
            onCancelClick={handleCancelCreatingProjectClick}
            onCreateProjectClick={handleCreateProjectClick}
          />
        )}
        {selectedProject && (
          <ProjectPage
            project={selectedProject}
            onClearProjectTaskClick={handleClearProjectTask}
            onAddProjectTaskClick={handleAddProjectTask}
            onDeleteProjectClick={handleDeleteProject}
          />
        )}
      </main>
    </div>
  );
}

export default App;
