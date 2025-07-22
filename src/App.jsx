import "./App.css";
import About from "./containers/About";
import Landing from "./containers/Landing";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Skills from "./containers/Skills";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div>
      <Landing />
      <About />
      <Skills />
    </div>
  );
}

export default App;
