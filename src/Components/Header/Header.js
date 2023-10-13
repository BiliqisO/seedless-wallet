import React, { useState } from "react";
import seedlessimg from "./Logo.png";
import "./Header.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="left">
        <img
          src={seedlessimg}
          alt="header-logo"
        />
        <h1 className="Seedless">Seedless</h1>
      </div>
      <div className="right">
        <ul className="flex">
          <li className="list">HOW IT WORKS</li>
          <li className="list">FAQ’S</li>
          <li className="list">ABOUT</li>
          <li className="list">DOWNLOAD</li>
        </ul>
        <h1
          onClick={handleClick}
          className="hamburger-close"
        >
          {isOpen ? "X" : "|||"}
        </h1>
        <ul className={isOpen ? "block" : "none"}>
          <li className="list">HOW IT WORKS</li>
          <li className="list">FAQ’S</li>
          <li className="list">ABOUT</li>
          <li className="list">DOWNLOAD</li>
        </ul>
      </div>
    </div>
  );
};
