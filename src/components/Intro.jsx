import { useEffect, useRef } from "react";
import "../styles/Intro.css";
import gsap from "gsap";

/**
 * Intro component which displays a "Hello, I am David" message and a profile image.
 * The component uses GSAP to animate the opacity and x position of the message and image.
 * The message is displayed on the left side of the screen and the image is displayed on the right side.
 * The component is exported as the default component of the module.
 *
 * @returns {ReactElement} A JSX element representing the Intro component.
 */
const Intro = () => {
  const introRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      introRef.current,
      { opacity: 0, x: -800 },
      { opacity: 1, x: 0, duration: 2, delay: 1 }
    );

    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: 800 },
      { opacity: 1, x: 0, duration: 3, delay: 2 }
    );
  }, []);

  return (
    <div className="text-white pt-28 text-center flex justify-center">
      <div className="w-1/3" ref={introRef}>
        <h1 className="text-9xl">Hello, I am David</h1>
        <span className="text-5xl">
          I am a{" "}
          <span className="bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text font-extrabold">
            Full Stack Developer
          </span>
        </span>
      </div>
      <img
        src="../images/Subject1.png"
        className="w-1/3 h-1/3 rounded-3xl"
        ref={imgRef}
      />
    </div>
  );
};

export default Intro;
