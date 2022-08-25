import { useState } from "react";
import Header from "../Utils/Header/Header";
import ProjectsNav from "./ProjectsNav/ProjectsNav";
import ProjectTile from "./ProjectTile/ProjectTile";
import projects from "./projectConsts";
import ProjectModal from "./ProjectModal/ProjectModal";

const Projects = () => {
  const [projectsType, setProjectsType] = useState("All Projects");
  const [modalData, setModalData] = useState({ hidden: true });

  const launchModal = (project) => {
    setModalData({ ...project, hidden: false });
  };

  return (
    <section id="Projects" className="pb-32">
      <div className="section-container">
        <Header text="Projects I've Worked On" />
        <ProjectsNav
          projectsType={projectsType}
          setProjectsType={setProjectsType}
        />
        <div className="flex flex-wrap gap-8 justify-center sm:justify-start pt-6">
          {projects.map((project, index) => {
            if (
              projectsType === "All Projects" ||
              projectsType === project.type
            ) {
              return (
                <ProjectTile
                  key={index}
                  title={project.title}
                  icons={project.icons}
                  thumbnail={project.thumbnail}
                  onProjectSelect={() => launchModal(project)}
                />
              );
            }
          })}
        </div>
      </div>
      <ProjectModal modalData={modalData} setModalData={setModalData} />
    </section>
  );
};

export default Projects;
