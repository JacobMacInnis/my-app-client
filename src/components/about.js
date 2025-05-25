import React from 'react';
import './styles/about.css';
import JacobMacInnisImage from '../images/JacobMacInnis-square.jpg';

export default () => (
  <section className='about-me' id='about'>
    <h2 className='about-me-header'>About Me</h2>
    <div className='about-me-content'>
      <img className='profile-image' src={JacobMacInnisImage} alt='Jacob MacInnis' />
      <ul className='about-me-list'>
        <li>&nbsp;&nbsp;Hands-on engineering leader with deep experience in architecture, development, and technical leadership. Proven track record of designing and deploying scalable, cloud-native applications. Adept at leading engineering teams, fostering innovation, and optimizing processes.</li>
        <li>Completed AI/ML certifications from Stanford, DeepLearning.AI, Duke, and Google, combining strong theoretical foundations with practical implementation. Built and deployed models for image recognition, classification, NLP, transfer learning, RAG, and AI agents. Experienced with TensorFlow, PyTorch, scikit-learn, LangChain, and LangGraph.</li>
        <li>Published 50+ technical articles on Medium covering TypeScript, Python, data structures, algorithms, and applied machine learning.</li>
        <br></br>
        <br></br>
        <li className='section-header'><strong>What I Do Best:</strong></li>
        <li className='content'><span role="img" aria-label='green check-mark'>✅</span> Architect Scalable Cloud Solutions – Specializing in TypeScript, Node.js, React, AWS serverless</li>
        <li className='content'><span role="img" aria-label='green check-mark'>✅</span> Build & Mentor Engineering Teams – Guiding developers at all levels to achieve technical excellence</li>
        <li className='content'><span role="img" aria-label='green check-mark'>✅</span> Align Tech with Business Goals – Ensuring engineering efforts drive measurable business impact</li>
        <li className='content'><span role="img" aria-label='green check-mark'>✅</span> Deliver Practical AI Agents – Designing LangGraph-powered tools with LLM reasoning, memory, and tool use</li>
        <li className='content'><span role="img" aria-label='green check-mark'>✅</span> Modernize Legacy Systems – Transforming monoliths into resilient, cloud-native architectures</li>
        <br></br>
        <br></br>
        <li className='section-header'><strong>Tech Stack & Interests:</strong></li>
        <li className='content'><span role="img" aria-label='lightbulb'>💡</span> <strong>Experienced in:</strong> TypeScript, JavaScript, Node.js, Python, React, Redux, FastAPI, LangChain, LangGraph, Ollama, OpenAI, AWS, GCP, Azure, Firestore, SQL, NoSQL, Docker, Poetry</li>
        <li className='content'><span role="img" aria-label='lightbulb'>💡</span> <strong>Passionate about:</strong> AI/ML Agents, ML Pipelines, Full-Stack + ML Systems, Engineering Leadership</li>
        <br></br>
        <li className='section-header'><strong>Leadership Philosophy:</strong></li>
        <li className='content'><span role="img" aria-label='blue diamond'>🔹</span> <strong>Technical Excellence</strong> – Staying hands-on to ensure architectural integrity and best practices</li>
        <li className='content'><span role="img" aria-label='blue diamond'>🔹</span> <strong>People Development</strong> – Mentoring and fostering growth at all levels</li>
        <li className='content'><span role="img" aria-label='blue diamond'>🔹</span> <strong>Strategic Vision</strong> – Driving decisions that align technology with business outcomes</li>
        <br />
        <br />
        <li>&nbsp;&nbsp;Recent projects include autonomous agents, LLM-based refactoring systems, multi-model orchestration, and Retrieval-Augmented Generation (RAG) APIs. I work hands-on with tools like LangGraph, FastAPI, SentenceTransformers, T5, FAISS, and Docker to ship fast, useful prototypes and production tools.</li>
        <br></br>
        <br></br>
        <li>&nbsp;&nbsp;I hold certifications from Stanford, DeepLearning.AI, Duke and Google in <strong>Machine Learning, AI Agents, Managing Machine Learning In Production AI Business Strategy, and Data Analysis</strong>, blending emerging technologies with real-world software solutions. I thrive in just-in-time architecture to enhance product agility and delivery.</li>
        <br></br>
        <br></br>
        <li>&nbsp;&nbsp;I regularly share insights on TypeScript, Python, AI/ML, and modern software architecture to educate and inspire the tech community. Looking to connect with fellow technology leaders who are passionate about engineering leadership, cloud architecture, and AI-driven solutions.</li>
      </ul>
    </div>
  </section>
);
