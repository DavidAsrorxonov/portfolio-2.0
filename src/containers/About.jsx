import React from "react";
import SectionTitle from "../components/SectionTitle";
import CardContainer from "../components/CardContainer";
import NavigateButtons from "../components/NavigateButtons";

const About = () => {
  return (
    <div className="relative h-screen bg-[#161616]">
      <SectionTitle title="Get to know me" />
      <CardContainer />
      <NavigateButtons />
    </div>
  );
};

export default About;
