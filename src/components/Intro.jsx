import "../styles/Intro.css";

const Intro = () => {
  return (
    <div className="text-white pt-28 text-center flex justify-center">
      <div className="w-1/3">
        <h1 className="text-9xl">Hello, I am David</h1>
        <span className="text-5xl">I am a Full Stack Developer</span>
      </div>
      <img src="../images/Subject1.png" className="w-1/3 h-1/3 rounded-3xl" />
    </div>
  );
};

export default Intro;
