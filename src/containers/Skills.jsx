import React from "react";
import SectionTitle from "../components/SectionTitle";
import skills from "../constants/skills";

const Skills = () => {
  return (
    <div className="h-screen">
      <SectionTitle title="What I know" />

      {skills.map(({ id, skill, Icon }) => (
        <div key={id}>
          <h1 className="text-white">{skill}</h1>
          <Icon />
        </div>
      ))}
    </div>
  );
};

export default Skills;
