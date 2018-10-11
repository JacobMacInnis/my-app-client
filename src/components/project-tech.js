import React, { Component } from 'react';
import './project-tech.css';

class ProjectTech extends Component {
  
  render() {
    let techList = this.props.techList.map(tech => {
      return <li>{tech}</li>;
    })
    return (
      <ul className='tech-list'>
        {techList}
      </ul>
    )
  }
}

export default ProjectTech;