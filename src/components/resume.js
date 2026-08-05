import React from 'react';
import Headshot from './../images/Jacob_MacInnis_2026.png';
import { resumeData } from './../resumeData';
import './styles/resume.css';

const Resume = () => {
  const { name, title, location, pdf, contacts, summary, skills, experience, education, projects } = resumeData;

  return (
    <main className='resume-page' id='top'>
      <article className='resume-sheet'>
        <header className='resume-masthead'>
          <img className='resume-headshot' src={Headshot} alt={name} />
          <div className='resume-identity'>
            <h1>{name}</h1>
            <p className='resume-title'>{title}</p>
            <p className='resume-location'>{location}</p>
            <ul className='resume-contacts'>
              {contacts.map(contact => (
                <li key={contact.label}>
                  <a href={contact.href} target='_blank' rel='noopener noreferrer'>
                    <i className={contact.icon} aria-hidden='true'></i>
                    <span>{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='resume-actions'>
            <a className='resume-btn primary' href={pdf} target='_blank' rel='noopener noreferrer'>
              Download PDF
            </a>
            <a className='resume-btn ghost' href='/#home'>
              Back to site
            </a>
          </div>
        </header>

        <section className='resume-section'>
          <h2>Summary</h2>
          <div className='resume-section-body'>
            {summary.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className='resume-section'>
          <h2>Key Skills</h2>
          <div className='resume-section-body'>
            <dl className='resume-skills'>
              {skills.map(skill => (
                <div className='resume-skill-row' key={skill.label}>
                  <dt>{skill.label}</dt>
                  <dd>{skill.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className='resume-section'>
          <h2>Experience</h2>
          <div className='resume-section-body'>
            <ol className='resume-timeline'>
              {experience.map(job => (
                <li className='resume-job' key={`${job.company}-${job.start}`}>
                  <div className='resume-job-meta'>
                    <span className='resume-dates'>
                      {job.start} – {job.end}
                    </span>
                    {job.current && <span className='resume-badge'>Current</span>}
                  </div>
                  <div className='resume-job-body'>
                    <h3>
                      {job.role}
                      <span className='resume-company'>{job.company}</span>
                    </h3>
                    <p className='resume-job-location'>{job.location}</p>
                    <ul>
                      {job.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className='resume-section'>
          <h2>Selected AI / ML Projects</h2>
          <div className='resume-section-body'>
            <div className='resume-projects'>
              {projects.map(project => (
                <div className='resume-project' key={project.name}>
                  <h3>
                    {project.href ? (
                      <a href={project.href} target='_blank' rel='noopener noreferrer'>
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='resume-section'>
          <h2>Education &amp; Certifications</h2>
          <div className='resume-section-body'>
            <div className='resume-education'>
              {education.map(entry => (
                <div className='resume-edu-entry' key={entry.school}>
                  <h3>
                    {entry.school}
                    {entry.status && <span className='resume-badge subtle'>{entry.status}</span>}
                  </h3>
                  <p className='resume-credential'>{entry.credential}</p>
                  {entry.bullets.length > 0 && (
                    <ul>
                      {entry.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Resume;
