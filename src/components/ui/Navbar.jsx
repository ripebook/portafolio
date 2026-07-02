import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Un pequeño delay para que la transición de cerrado del menú ocurra
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span className="pulse-icon">::</span>
          <span className="glow-text-green">FG_PORTFOLIO</span>
        </div>
        
        {/* Botón Hamburguesa Cyberpunk */}
        <button 
          className={`navbar-toggle ${isOpen ? 'navbar-toggle--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú de navegación"
          aria-expanded={isOpen}
        >
          <span className="toggle-line" />
          <span className="toggle-line" />
          <span className="toggle-line" />
        </button>

        <div className={`navbar-links ${isOpen ? 'navbar-links--open' : ''}`}>
          <button onClick={() => scrollToSection('home')}>
            [ INICIO ]
          </button>
          <button onClick={() => scrollToSection('projects')}>
            [ PROYECTOS ]
          </button>
          <button onClick={() => scrollToSection('skills')}>
            [ HABILIDADES ]
          </button>
          <button onClick={() => scrollToSection('contact')}>
            [ CONTACTO ]
          </button>
        </div>
      </div>
    </nav>
  );
}
