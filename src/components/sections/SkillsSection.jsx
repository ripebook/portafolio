import React from 'react';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: ":: FRONTEND_STACK",
      skills: ["React", "Astro", "Three.js", "Tailwind CSS v4", "Semantic HTML5", "JavaScript ES6+"]
    },
    {
      title: ":: MOBILE_STACK",
      skills: ["Kotlin Multiplatform", "Compose Multiplatform", "Clean Architecture", "Gradle"]
    },
    {
      title: ":: TOOLS_FLOW",
      skills: ["pnpm", "Git", "GitHub", "Vercel", "Vite", "Node.js"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <div className="section-label text-neon-cyan">
          :: SYSTEM_CAPABILITIES
        </div>
        <h2 className="section-title glow-text-cyan">
          :: TECHNICAL_SKILLS
        </h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="skill-card"
          >
            <h3 className="skill-card__title">
              {category.title}
            </h3>
            <div className="skill-card__list">
              {category.skills.map((skill) => (
                <div key={skill} className="skill-card__item">
                  <div className="skill-card__dot" />
                  <span className="skill-card__name">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
