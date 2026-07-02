import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, InstagramIcon } from '../ui/Icons';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header" style={{ textAlign: 'center' }}>
        <div className="section-label text-neon-amber">
          :: ESTABLECER_CONEXION
        </div>
        <h2 className="section-title glow-text-cyan">
          :: CONTACTO_Y_REDES
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="contact-card"
      >
        <p className="contact-card__text">
          CANAL DE COMUNICACION SEGURO DISPONIBLE. SELECCIONAR MEDIO DE ACCESO:
        </p>

        <div className="contact-card__buttons">
          <a
            href="https://github.com/ripebook"
            target="_blank"
            rel="noreferrer"
            className="contact-btn contact-btn--green"
          >
            <GithubIcon />
            <span>ACCEDER_GITHUB</span>
          </a>

          <a
            href="https://instagram.com/frangarkl"
            target="_blank"
            rel="noreferrer"
            className="contact-btn contact-btn--cyan"
          >
            <InstagramIcon />
            <span>ACCEDER_INSTAGRAM</span>
          </a>
        </div>
      </motion.div>

      <div className="footer-text">
        <p>
          Francisco Garcia &copy; {new Date().getFullYear()} // TODOS LOS ACCESOS ENCRIPTADOS
        </p>
      </div>
    </section>
  );
}
