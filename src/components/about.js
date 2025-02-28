import React from 'react';
import './styles/about.css';
import JacobMacInnisImage from '../images/JacobMacInnis-square.jpg';

export default () => (
  <section className='about-me' id='about'>
    <h2 className='about-me-header'>About Me</h2>
    <div className='about-me-content'>
      <img className='profile-image' src={JacobMacInnisImage} alt='Jacob MacInnis' />
      <ul className='about-me-list'>
        <li>&nbsp;&nbsp;Director of Engineering with a track record of leading high-performing teams and architecting scalable enterprise solutions. I bridge the gap between business objectives and engineering execution through a combination of hands-on technical expertise and strategic leadership.</li>
        <br></br>
        <br></br>
        <li className='section-header'><strong>What I Do Best:</strong></li>
        <li className='content'><span role="img" aria-label='green check-mark'>✅</span> Architect Scalable Cloud Solutions – Specializing in TypeScript, Node.js, React, AWS serverless</li>
        <li className='content'><span role="img" aria-label='green check-mark'>✅</span> Build & Mentor Engineering Teams – Guiding developers at all levels to achieve technical excellence</li>
        <li className='content'><span role="img" aria-label='green check-mark'>✅</span> Align Tech with Business Goals – Ensuring engineering efforts drive measurable business impact</li>
        <li className='content'><span role="img" aria-label='green check-mark'>✅</span> Modernize Legacy Systems – Transforming monoliths into resilient, cloud-native architectures</li>
        <br></br>
        <br></br>
        <li className='section-header'><strong>Tech Stack & Interests:</strong></li>
        <li className='content'><span role="img" aria-label='lightbulb'>💡</span> <strong>Experienced in:</strong> TypeScript, JavaScript, Node.js, Python, React, Redux, AWS, GCP, Azure, Firestore, NoSQL, SQL</li>
        <li className='content'><span role="img" aria-label='lightbulb'>💡</span> <strong>Passionate about:</strong> AI/ML, Engineering Leadership</li>
        <br></br>
        <li className='section-header'><strong>Leadership Philosophy:</strong></li>
        <li className='content'><span role="img" aria-label='blue diamond'>🔹</span> <strong>Technical Excellence</strong> – Staying hands-on to ensure architectural integrity and best practices</li>
        <li className='content'><span role="img" aria-label='blue diamond'>🔹</span> <strong>People Development</strong> – Mentoring and fostering growth at all levels</li>
        <li className='content'><span role="img" aria-label='blue diamond'>🔹</span> <strong>Strategic Vision</strong> – Driving decisions that align technology with business outcomes</li>
        <br></br>
        <br></br>
        <li>&nbsp;&nbsp;I hold certifications in <strong>Machine Learning, AI Business Strategy, and Data Analysis</strong>, blending emerging technologies with real-world software solutions. I thrive in just-in-time architecture to enhance product agility and delivery.</li>
        <br></br>
        <br></br>
        <li>&nbsp;&nbsp;I regularly share insights on TypeScript, AI/ML, and modern software architecture to educate and inspire the tech community. Looking to connect with fellow technology leaders who are passionate about engineering leadership, cloud architecture, and AI-driven solutions.</li>
      </ul>
    </div>
  </section>
);
