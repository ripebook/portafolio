import React from 'react';
import { motion } from 'framer-motion';
import Terminal from '../ui/Terminal';

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-inner">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-subtitle">
            :: SISTEMA_ONLINE_
          </div>
          <h1
            data-text="FRANCISCO GARCIA"
            className="glitch-animation hero-title glow-text-green"
          >
            FRANCISCO GARCIA
          </h1>
          <p className="hero-desc">
            [*_*] DEVELOPER_PORTFOLIO_V3.5_
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
