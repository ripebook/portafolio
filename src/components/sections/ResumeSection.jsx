import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../data/cv_data';
import { GithubIcon, MailIcon } from '../ui/Icons';

export default function ResumeSection() {
  const [lang, setLang] = useState('en');
  const data = cvData[lang];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="section resume-section-container">
      <div className="resume-controls no-print">
        <div className="section-header-compact">
          <div className="section-label text-neon-amber">
            :: SYSTEM_RECORDS
          </div>
          <h2 className="section-title glow-text-amber">
            :: RESUME_DATABASE
          </h2>
        </div>

        <div className="controls-group">
          <div className="language-selector">
            <button 
              className={`lang-btn ${lang === 'es' ? 'active glow-text-amber' : ''}`}
              onClick={() => setLang('es')}
            >
              [ ES ]
            </button>
            <button 
              className={`lang-btn ${lang === 'en' ? 'active glow-text-amber' : ''}`}
              onClick={() => setLang('en')}
            >
              [ EN ]
            </button>
          </div>

          <button onClick={handlePrint} className="print-btn glow-border-amber">
            <svg 
              className="btn-icon" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            <span>{lang === 'es' ? 'IMPRIMIR / PDF' : 'PRINT / SAVE PDF'}</span>
          </button>
        </div>
      </div>

      <motion.div 
        key={lang}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="resume-document glow-border-green"
      >
        <header className="resume-header">
          <div className="header-primary">
            <h1 className="resume-name text-neon-green glow-text-green">{data.personal.name}</h1>
            <p className="resume-title text-neon-cyan">{data.personal.title}</p>
          </div>
          <div className="header-contact text-dim">
            <div className="contact-item">
              <span className="contact-label">[LOC]</span>
              <span>{data.personal.location}</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">[TEL]</span>
              <span>{data.personal.phone}</span>
            </div>
            <div className="contact-item">
              <MailIcon className="contact-icon" />
              <a href={`mailto:${data.personal.email}`}>{data.personal.email}</a>
            </div>
            <div className="contact-item">
              <GithubIcon className="contact-icon" />
              <a href={data.personal.githubUrl} target="_blank" rel="noreferrer">
                {data.personal.github}
              </a>
            </div>
          </div>
        </header>

        <hr className="resume-divider" />

        <section className="resume-block">
          <h3 className="resume-section-heading">
            <span className="heading-marker no-print">&gt;</span>
            <span className="no-print">{lang === 'es' ? 'PERFIL_PROFESIONAL' : 'PROFESSIONAL_SUMMARY'}</span>
            <span className="print-only">{lang === 'es' ? 'Perfil Profesional' : 'Professional Summary'}</span>
          </h3>
          <p className="resume-profile-text">{data.profile}</p>
        </section>

        <section className="resume-block">
          <h3 className="resume-section-heading">
            <span className="heading-marker no-print">&gt;</span>
            <span className="no-print">{lang === 'es' ? 'HABILIDADES_TECNICAS' : 'TECHNICAL_SKILLS'}</span>
            <span className="print-only">{lang === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}</span>
          </h3>
          <div className="resume-skills-grid">
            {data.skills.map((skillGroup, idx) => (
              <div key={idx} className="resume-skill-card">
                <h4 className="resume-skill-title text-neon-cyan">{skillGroup.category}</h4>
                <div className="resume-skill-list">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span key={sIdx} className="resume-skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="resume-content-layout">
          <div className="resume-main-column">
            <section className="resume-block">
              <h3 className="resume-section-heading">
                <span className="heading-marker no-print">&gt;</span>
                <span className="no-print">{lang === 'es' ? 'EXPERIENCIA_LABORAL' : 'WORK_EXPERIENCE'}</span>
                <span className="print-only">{lang === 'es' ? 'Experiencia Laboral' : 'Work Experience'}</span>
              </h3>
              {data.experience.map((job, idx) => (
                <div key={idx} className="resume-item">
                  <div className="resume-item-header">
                    <div className="item-header-left">
                      <h4 className="item-title font-bold">{job.role}</h4>
                      <span className="item-subtitle text-neon-green">{job.company}</span>
                    </div>
                    <div className="item-meta">
                      <span className="item-period">{job.period}</span>
                      <span className="item-location text-dim">{job.location}</span>
                    </div>
                  </div>
                  <ul className="resume-list">
                    {job.achievements.map((achievement, aIdx) => (
                      <li key={aIdx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          <div className="resume-side-column">
            <section className="resume-block">
              <h3 className="resume-section-heading">
                <span className="heading-marker no-print">&gt;</span>
                <span className="no-print">{lang === 'es' ? 'EDUCACION' : 'EDUCATION'}</span>
                <span className="print-only">{lang === 'es' ? 'Educación' : 'Education'}</span>
              </h3>
              {data.education.map((edu, idx) => (
                <div key={idx} className="resume-edu-item">
                  <h4 className="item-title">{edu.degree}</h4>
                  <p className="item-institution text-neon-cyan">{edu.institution}</p>
                  <div className="item-edu-meta text-dim">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="item-details">{edu.details}</p>
                </div>
              ))}
            </section>
          </div>
        </div>

        <section className="resume-block resume-projects-block">
          <h3 className="resume-section-heading">
            <span className="heading-marker no-print">&gt;</span>
            <span className="no-print">{lang === 'es' ? 'PROYECTOS_DESTACADOS' : 'FEATURED_PROJECTS'}</span>
            <span className="print-only">{lang === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}</span>
          </h3>
          <div className="resume-projects-list">
            {data.projects.map((project, idx) => (
              <div key={idx} className="resume-project-item">
                <div className="resume-project-header">
                  <h4 className="project-name text-neon-green">{project.title}</h4>
                  <div className="project-tech text-dim">[{project.tech}]</div>
                </div>
                <p className="project-desc">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </section>
  );
}
