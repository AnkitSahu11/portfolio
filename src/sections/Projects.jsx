import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import SectionHead from '../components/SectionHead';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="section-block content-section">

      <SectionHead
        number="02"
        title="Selected projects"
        subtitle="A selection of projects I've built and worked on."
      />

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <a
                className="icon-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name} GitHub repository`}
              >
                <Github size={19} />
                <ExternalLink size={14} />
              </a>
            </div>

            <h3>{project.name}</h3>

            <p className="project-subtitle">{project.subtitle}</p>

            <p className="body-copy">{project.description}</p>

            <ul>
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div className="tag-list">
              {project.stack.map((technology) => (
                <span className="tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <a
              className="text-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View source code <ArrowRight size={16} />
            </a>

          </article>
        ))}
      </div>
    </section>
  );
}