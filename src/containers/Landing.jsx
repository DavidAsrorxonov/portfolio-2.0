import Header from "../components/Header";
import Intro from "../components/Intro";
import Scroll from "../components/Scroll";

/**
 * The Landing component renders the landing page of the website.
 * The page contains the Header, Intro, and Scroll components.
 * The Scroll component is used to animate the scrolling of the page.
 * The component is rendered as a full-screen div (h-screen class).
 */
const Landing = () => {
  return (
    <div className="h-screen">
      <Header />
      <Intro />
      <Scroll />
    </div>
  );
};

export default Landing;
