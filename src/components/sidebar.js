import React from "react";
import { stack as Menu } from "react-burger-menu";
import resume from './../files/Jacob-MacInnis-Resume.pdf';
import './sidebar.css';

export default props => {
  return (
    <Menu className='burger-menu'>
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
      <a href={resume}
        alt='resume pdf'>RESUME <i className="fas fa-print fa-1x print-icon"></i>
        </a>
    </Menu>
  );
};