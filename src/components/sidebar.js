import React from "react";
import { stack as Menu } from "react-burger-menu";
import './sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="#home">
        Home
      </a>

      <a className="menu-item" href="#about">
        About
      </a>

      <a className="menu-item" href="#projects">
        Projects
      </a>
      <a className="menu-item" href='#tech-stack'>
        Tech Stack
      </a>
      <a className="menu-item" href="#twitter">
        Twitter
      </a>
      <a className="menu-item" href="#contact">
        Contact
      </a>
    </Menu>
  );
};