import React, { useEffect, useRef } from "react";
import headerLinks from "../constants/headerLinks";
import "../styles/Header.css";
import gsap from "gsap";

/**
 * A Header component that displays a list of links in the header.
 * Each link is rendered as an <a> element with a `href` attribute.
 * The Header component is fixed at the top of the page.
 * The animation is handled by GSAP.
 *
 * @returns {ReactElement} A JSX element representing the Header component.
 */
const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="text-white" ref={headerRef}>
      <div className="fixed flex justify-center items-center w-full">
        <div className="flex items-center justify-center gap-3 custom-background">
          {headerLinks.map((link, idx) => (
            <a
              href={link.path}
              className="text-white text-lg px-5 py-2"
              key={idx}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
