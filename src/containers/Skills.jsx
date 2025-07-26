import React, { useEffect, useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import skills from "../constants/skills";
import SkillsContainer from "../components/SkillsContainer";
import NavigateButtons from "../components/NavigateButtons";
import { useNumberOfChildren } from "../context/NumberOfChildrenContext";
import { useInView } from "react-intersection-observer";
import TotalCardCount from "../components/TotalCardCount";

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
  const { setNumberOfChildren } = useNumberOfChildren();

  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      console.log("Skills section in view");
      const container = scrollContainerRef.current;
      console.log(container);
      if (container) setNumberOfChildren(container.children.length);
    }
  }, [inView]);

  return (
    <div className="relative h-screen bg-black" ref={sectionRef}>
      <SectionTitle title="What I know" />
      <SkillsContainer scrollRef={scrollContainerRef} />
      <NavigateButtons scrollContainerRef={scrollContainerRef} />
      <TotalCardCount />
    </div>
  );
};

export default Skills;
