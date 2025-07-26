import React, { useEffect, useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import CardContainer from "../components/CardContainer";
import NavigateButtons from "../components/NavigateButtons";
import { useNumberOfChildren } from "../context/NumberOfChildrenContext";
import { useInView } from "react-intersection-observer";
import TotalCardCount from "../components/TotalCardCount";

/**
 * A component that renders the About section of the website.
 *
 * The About section contains a brief summary of the user's background and interests.
 * It also includes a navigation button at the bottom to navigate to the next section.
 *
 * @returns A JSX element representing the About section.
 */
const About = () => {
  const scrollContainerRef = useRef(null);
  const { setNumberOfChildren } = useNumberOfChildren();

  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      console.log("About section in view");
      const container = scrollContainerRef.current;
      console.log(container);
      if (container) setNumberOfChildren(container.children.length);
    }
  }, [inView]);

  return (
    <div className="relative h-screen bg-[#161616]" ref={sectionRef}>
      <SectionTitle title="Get to know me" />
      <CardContainer scrollRef={scrollContainerRef} />
      <NavigateButtons scrollContainerRef={scrollContainerRef} />
      <TotalCardCount />
    </div>
  );
};

export default About;
