import React from 'react';
import './CSSFallbackBackground.css';

export default function CSSFallbackBackground() {
  return (
    <div className="css-fallback-bg">
      <div className="cyber-grid" />
      <div className="cyber-gradient" />
      <div className="cyber-glow-orb cyber-glow-orb--green" />
      <div className="cyber-glow-orb cyber-glow-orb--cyan" />
    </div>
  );
}
