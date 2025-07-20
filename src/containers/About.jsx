import React, { useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import CardContainer from "../components/CardContainer";
import NavigateButtons from "../components/NavigateButtons";

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

  return (
    <div className="relative h-screen bg-[#161616]">
      <SectionTitle title="Get to know me" />
      <CardContainer scrollRef={scrollContainerRef} />
      <NavigateButtons scrollContainerRef={scrollContainerRef} />
    </div>
  );
};

export default About;
