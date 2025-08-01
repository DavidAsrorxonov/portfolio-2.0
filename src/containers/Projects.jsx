import React from "react";
import ProjectsBody from "../components/ProjectsBody";
import SectionTitle from "../components/SectionTitle";

const Projects = () => {
  return (
    <div className="h-screen">
      <SectionTitle title="What I have built" />
      <ProjectsBody />
    </div>
  );
};

export default Projects;
