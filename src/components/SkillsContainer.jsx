import React, { useEffect, useRef, useState } from "react";
import SkillsCard from "./SkillsCard";
import skills from "../constants/skills";
import { useNumberOfChildren } from "../context/NumberOfChildrenContext";

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
  const { setActiveIndex } = useNumberOfChildren();
  const itemsRefs = useRef([]);

  useEffect(() => {
    itemsRefs.current = itemsRefs.current.slice(0, skills.length);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.1,
      }
    );

    itemsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  }, [scrollRef]);

  return (
    <div
      className="w-full h-[85%] overflow-x-scroll scroll-smooth snap-x snap-mandatory flex scrollbar-hide"
      ref={scrollRef}
    >
      {skills.map((skill, index) => (
        <div
          ref={(el) => (itemsRefs.current[index] = el)}
          data-index={index}
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
