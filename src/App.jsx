import "./App.css";
import About from "./containers/About";
import Landing from "./containers/Landing";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div>
      <Landing />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
