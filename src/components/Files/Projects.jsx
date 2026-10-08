import React, { useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import projects from '../../data/projects';

const getScreenshotUrl = (url) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800`;

function ProjectPreview({ project }) {
  return (
    <div className={`project-card__preview${project.image ? ' project-card__preview--has-logo' : ''}`}>
      <img
        src={getScreenshotUrl(project.url)}
        alt={`${project.name} project preview`}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.onerror = null;
          if (project.image) {
            event.currentTarget.src = project.image;
            event.currentTarget.classList.add('project-card__preview-logo');
          } else {
            event.currentTarget.style.display = 'none';
          }
        }}
      />
      <span className="project-card__preview-label">
        {project.url.includes('github.com') ? 'GitHub project' : 'Live project'}
      </span>
    </div>
  );
}

export default function Projects() {
  const [searchParams] = useSearchParams();
  const selected = searchParams.get('selected');
  const refs = useRef({});

  useEffect(() => {
    if (selected && refs.current[selected]) {
      refs.current[selected].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selected]);

  return (
    <main className="projects-page">
      <header className="projects-page__header">
        <div>
          <p className="projects-page__eyebrow">Selected work</p>
          <h1>Projects built for people</h1>
          <p className="projects-page__intro">
            A closer look at products, platforms, and tools I&apos;ve helped bring to life.
          </p>
        </div>
        <Link className="projects-page__back" to="/">Back to profile <span aria-hidden="true">-&gt;</span></Link>
      </header>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={project.name}
            ref={(element) => { refs.current[project.name] = element; }}
            className={`project-card${selected === project.name ? ' project-card--selected' : ''}`}
          >
            <ProjectPreview project={project} />
            <div className="project-card__content">
              <div className="project-card__meta">
                <span>{project.category}</span>
                <span className="project-card__index">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.url.includes('github.com') ? 'View on GitHub' : 'Visit project'}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <footer className="projects-page__footer">
        <p>Have a project in mind?</p>
        <Link to="/Contact">Let&apos;s talk <span aria-hidden="true">-&gt;</span></Link>
      </footer>
    </main>
  );
}
