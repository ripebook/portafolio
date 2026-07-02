import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projects';
import { GithubIcon, ExternalLinkIcon } from '../ui/Icons';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <div className="section-label text-neon-green">
          :: ARCHIVOS_PROYECTO
        </div>
        <h2 className="section-title glow-text-green">
          :: PROYECTOS_DE_DESARROLLO
        </h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="project-card"
          >
            <div className="project-card__image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-card__image"
              />
              <div className="project-card__type-badge">
                {project.type}
              </div>
            </div>

            <div className="project-card__body">
              <div className="project-card__info">
                <h3 className="project-card__title">
                  {project.title}
                </h3>
                <p className="project-card__desc">
                  {project.description}
                </p>
              </div>

              <div className="project-card__meta">
                <div className="project-card__tags">
                  {project.tech.map((tag) => (
                    <span key={tag} className="project-card__tag">
                      [{tag}]
                    </span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link"
                  >
                    <GithubIcon />
                    <span>CODIGO</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__link"
                    >
                      <ExternalLinkIcon />
                      <span>DEMO_VIVO</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
