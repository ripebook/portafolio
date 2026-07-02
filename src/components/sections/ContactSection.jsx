import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, InstagramIcon, MailIcon } from '../ui/Icons';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header" style={{ textAlign: 'center' }}>
        <div className="section-label text-neon-amber">
          :: ESTABLISH_CONNECTION
        </div>
        <h2 className="section-title glow-text-cyan">
          :: CONTACT_&_SOCIALS
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
          SECURE COMMUNICATION CHANNEL AVAILABLE. SELECT ACCESS METHOD:
        </p>

        <div className="contact-card__buttons">
          <a
            href="https://github.com/ripebook"
            target="_blank"
            rel="noreferrer"
            className="contact-btn contact-btn--green"
          >
            <GithubIcon />
            <span>ACCESS_GITHUB</span>
          </a>

          <a
            href="https://instagram.com/frangarkl"
            target="_blank"
            rel="noreferrer"
            className="contact-btn contact-btn--cyan"
          >
            <InstagramIcon />
            <span>ACCESS_INSTAGRAM</span>
          </a>

          <a
            href="mailto:frangarkl@gmail.com"
            className="contact-btn contact-btn--amber"
          >
            <MailIcon />
            <span>SEND_EMAIL</span>
          </a>
        </div>
      </motion.div>

      <div className="footer-text">
        <p>
          Francisco Garcia &copy; {new Date().getFullYear()} // ALL ACCESS ENCRYPTED
        </p>
      </div>
    </section>
  );
}
