import React from "react";
import SectionTitle from "../components/SectionTitle";
import skills from "../constants/skills";
import SkillsContainer from "../components/SkillsContainer";

const Skills = () => {
  return (
    <div className="relative h-screen bg-black">
      <SectionTitle title="What I know" />
      <SkillsContainer />
    </div>
  );
};

export default Skills;
