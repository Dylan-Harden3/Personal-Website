import { useState } from "react";
import Header from "../Utils/Header/Header";
import ProjectsNav from "./ProjectsNav/ProjectsNav";
import ProjectTile from "./ProjectTile/ProjectTile";
import projects from "./projectConsts";

const Projects = () => {

    const [projectsType, setProjectsType] = useState('All Projects');

    return (
        <section id="Projects">
            <div className="section-container">
                <Header text="Projects I've Worked On" />
                <ProjectsNav projectsType={projectsType} setProjectsType={setProjectsType} />
                <div className="flex flex-wrap gap-8 justify-center sm:justify-start pt-6">
                    {
                        projects.map((project, index) => {
                            if (projectsType === 'All Projects' || projectsType === project.type) {
                                return <ProjectTile key={index} title={project.title} icons={project.icons} thumbnail={project.thumbnail} />
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )

};

export default Projects