import "./App.css";
import About from "./containers/About";
import Landing from "./containers/Landing";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div>
      <Landing />
      <About />
    </div>
  );
}

export default App;
