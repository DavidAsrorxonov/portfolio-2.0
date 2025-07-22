import React from "react";
import SkillsCard from "./SkillsCard";
import skills from "../constants/skills";

/**
 * A component that renders a container with a horizontal scroll list of skills.
 *
 * The component takes a single prop, `scrollRef`, which is a reference to the scroll container.
 * The component renders a div with a class of "w-full h-[85%] overflow-x-scroll scroll-smooth snap-x snap-mandatory flex scrollbar-hide"
 * and ref set to the `scrollRef` prop.
 * The component maps over the `skills` array and renders a `SkillsCard` component for each item in the array.
 * The `key` for each item is set to the `id` property of the skill object.
 * The component is exported as the default component of the module.
 */
const SkillsContainer = ({ scrollRef }) => {
  return (
    <div
      className="w-full h-[85%] overflow-x-scroll scroll-smooth snap-x snap-mandatory flex scrollbar-hide"
      ref={scrollRef}
    >
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="snap-center min-w-full flex justify-center items-center"
        >
          <SkillsCard {...skill} />
        </div>
      ))}
    </div>
  );
};

export default SkillsContainer;
