import React, { useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import skills from "../constants/skills";
import SkillsContainer from "../components/SkillsContainer";
import NavigateButtons from "../components/NavigateButtons";

/**
 * A component that renders the skills section of the website.
 *
 * The skills section displays a horizontal scroll list of skills I know.
 * The component also renders a navigation button at the bottom to navigate to the next section.
 *
 * @returns A JSX element representing the skills section.
 */
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
