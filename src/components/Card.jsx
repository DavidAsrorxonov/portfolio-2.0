import React, { useEffect, useRef } from "react";
import highlight from "../lib/utils/highlight";
import gsap from "gsap";

const Card = ({ title, subtitle, description, quote }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  const refs = [titleRef, subtitleRef, descriptionRef];

  useEffect(() => {
    refs.forEach((ref, idx) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="h-[90%] w-[80%] bg-black text-white rounded-3xl shadow-xl px-10 py-12">
      <div className="flex flex-col justify-center h-full space-y-6">
        <h1 className="text-6xl font-bold" ref={titleRef}>
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-4xl font-medium text-gray-400" ref={subtitleRef}>
            {subtitle}
          </h2>
        )}
        {Array.isArray(description) ? (
          <div
            className="space-y-3 text-2xl leading-relaxed text-gray-200"
            ref={descriptionRef}
          >
            {description.map((line, idx) => (
              <p key={idx}>{highlight(line)}</p>
            ))}
          </div>
        ) : (
          <p
            className="text-lg leading-relaxed text-gray-200"
            ref={descriptionRef}
          >
            {description}
          </p>
        )}
        <div className="flex flex-col items-end w-full">
          {quote && (
            <p className="text-2xl text-gray-400">
              <i>{quote}</i>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
