import { useEffect, useRef } from "react";
import "../styles/Intro.css";
import gsap from "gsap";

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
        <span className="text-5xl">I am a Full Stack Developer</span>
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
