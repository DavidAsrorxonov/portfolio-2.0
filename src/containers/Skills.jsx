import React, { useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import skills from "../constants/skills";
import SkillsContainer from "../components/SkillsContainer";
import NavigateButtons from "../components/NavigateButtons";

const Skills = () => {
  const scrollContainerRef = useRef(null);

  return (
    <div className="relative h-screen bg-black">
      <SectionTitle title="What I know" />
      <SkillsContainer scrollRef={scrollContainerRef} />
      <NavigateButtons scrollContainerRef={scrollContainerRef} />
    </div>
  );
};

export default Skills;
