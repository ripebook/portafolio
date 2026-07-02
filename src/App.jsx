import React from 'react';
import Navbar from './components/ui/Navbar';
import CyberpunkScene from './components/3d/CyberpunkScene';
import ScanlineOverlay from './components/ui/ScanlineOverlay';
import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <CyberpunkScene />
      <ScanlineOverlay />
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
