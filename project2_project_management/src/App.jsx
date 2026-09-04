import { useState } from "react";

import CreateProjectPage from "./components/CreateProjectPage";
import NoProjectPage from "./components/NoProjectPage";
import ProjectPage from "./components/ProjectPage";
import Sidebar from "./components/Sidebar";

/*
projects:
[{
  title: "Project Title",
  dueDate: "04/09/2026",
  description: "Project description",
  tasks: ["Implement the React Project Management project"]
}]*/
function App() {
  const [projects, setProjects] = useState([
    {
      title: "Project Title",
      dueDate: "04/09/2026",
      description: "Project descriptionzzzzz",
      tasks: [],
    },
    {
      title: "Project Title2",
      dueDate: "20/09/2026",
      description: "Project descriptionaaaaaa",
      tasks: ["Implement the React Project Management project"],
    },
  ]);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(undefined);

  const handleSelectProject = (projectTitle) => {
    setIsCreatingProject(false);
    setSelectedProject(
      projects.find((project) => project.title === projectTitle),
    );
  };

  const handleClearProjectTask = (task) => {
    setSelectedProject((prevSelectedProject) => {
      console.log(prevSelectedProject.tasks.filter((_task) => _task !== task));
    });
  };

  const handleDeleteProject = (projectTitle) => {
    setSelectedProject(undefined);
    setProjects([
      ...projects.filter((project) => project.title !== projectTitle),
    ]);
  };

  const handleAddProjectClick = () => {
    setIsCreatingProject(true);
  };

  const handleCancelCreatingProjectClick = () => {};

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
        {!selectedProject && isCreatingProject && <CreateProjectPage />}
        {selectedProject && (
          <ProjectPage
            project={selectedProject}
            onClearProjectTaskClick={handleClearProjectTask}
            onDeleteProjectClick={handleDeleteProject}
          />
        )}
      </main>
    </div>
  );
}

export default App;
