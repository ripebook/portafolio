import React from 'react';

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span className="pulse-icon">::</span>
          <span className="glow-text-green">FG_PORTFOLIO</span>
        </div>
        <div className="navbar-links">
          <button onClick={() => scrollToSection('home')}>
            INICIO
          </button>
          <button onClick={() => scrollToSection('projects')}>
            PROYECTOS
          </button>
          <button onClick={() => scrollToSection('skills')}>
            HABILIDADES
          </button>
          <button onClick={() => scrollToSection('contact')}>
            CONTACTO
          </button>
        </div>
      </div>
    </nav>
  );
}
