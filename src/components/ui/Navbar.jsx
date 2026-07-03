import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // A small delay to allow the menu closing transition to occur
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
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <span className="toggle-line" />
          <span className="toggle-line" />
          <span className="toggle-line" />
        </button>

        <div className={`navbar-links ${isOpen ? 'navbar-links--open' : ''}`}>
          <button onClick={() => scrollToSection('home')}>
            [ HOME ]
          </button>
          <button onClick={() => scrollToSection('projects')}>
            [ PROJECTS ]
          </button>
          <button onClick={() => scrollToSection('skills')}>
            [ SKILLS ]
          </button>
          <button onClick={() => scrollToSection('resume')}>
            [ RESUME ]
          </button>
          <button onClick={() => scrollToSection('contact')}>
            [ CONTACT ]
          </button>
        </div>
      </div>
    </nav>
  );
}
