import React, { Component } from 'react';
import './styles/project-tech.css';

class ProjectTech extends Component {
  
  render() {
    let techList = this.props.techList.map((tech, index) => {
      if (index !== this.props.techList.length - 1) {
        return <span className='tech' key={`${index}`}>{tech}, </span>;  
      } else {
        return <span className='tech' key={`${index}`}>{tech}</span>;
      }
      
    })
    return (
      <div>
        <h2 className='tech-h2'>Technologies Used</h2>
        <div className='tech-list'>
          {techList}
        </div>
      </div>
    )
  }
}

export default ProjectTech;