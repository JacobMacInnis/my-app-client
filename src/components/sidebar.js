import React from "react";
import { stack as Menu } from "react-burger-menu";
import './styles/sidebar.css';

export default props => {
  return (
    <Menu className='burger-menu'>
      <a className="menu-item" href="/#home">
        Home
      </a>

      <a className="menu-item" href="/#about">
        About
      </a>

      <a className="menu-item" href="/#projects">
        Projects
      </a>
      <a className="menu-item" href='/#tech-stack'>
        Tech Stack
      </a>
      {/* <a className="menu-item" href="/#twitter">
        Twitter
      </a> */}
      <a className="menu-item" href="/#contact">
        Contact
      </a>
      <a href="https://jacobmacinnis.netlify.app/files/Jacob_MacInnis_resume.pdf" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </Menu>
  );
};