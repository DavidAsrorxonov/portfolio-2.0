import { useEffect, useRef } from "react";
import "../styles/SectionTitle.css";
import gsap from "gsap";

/**
 * A SectionTitle component which displays a title of a section.
 * The component uses GSAP to animate the opacity and y position of the title.
 * The animation is triggered when the title comes into view.
 *
 * @param {string} title The title of the section.
 * @returns {ReactElement} A JSX element representing the SectionTitle component.
 */
const SectionTitle = ({ title }) => {
  const sectionTitleRef = useRef(null);

  useEffect(() => {
    const element = sectionTitleRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="w-full" ref={sectionTitleRef}>
      <h1 className="text-7xl font-bold mx-10 py-5 gradient-text">{title}</h1>
    </div>
  );
};

export default SectionTitle;
