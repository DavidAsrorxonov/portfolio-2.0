import React from "react";
import ProjectCard from "./ProjectsCard";
import { projects } from "../constants/projects";
import GuidingLine from "./GuidingLine";

const ProjectsBody = () => {
  return (
    <div className="flex items-center justify-between mx-10">
      {projects.map((project) => (
        <>
          <ProjectCard key={project.id} {...project} />
          <div className="w-full h-full">
            <div className="flex items-center justify-center">
              <GuidingLine id={project.id} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ProjectsBody;
