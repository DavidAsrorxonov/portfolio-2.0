import React from "react";
import headerLinks from "../constants/headerLinks";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="text-white">
      <div className="fixed flex justify-center items-center w-full">
        <div className="flex items-center justify-center gap-3 custom-background">
          {headerLinks.map((link, idx) => (
            <a href={link.path} className="text-white px-5 py-2" key={idx}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
