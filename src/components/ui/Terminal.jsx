import React, { useState, useEffect } from 'react';

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const fullLines = [
    { text: ":: INICIALIZANDO INTERFAZ TERMINAL... OK", color: "text-neon-green" },
    { text: ":: BUSCANDO DATOS DEL SISTEMA... COMPLETADO", color: "text-neon-green" },
    { text: ":: CONEXION ESTABLECIDA CON SEC_USER_501", color: "text-neon-cyan" },
    { text: "> WHOAMI", color: "text-dim" },
    { text: "Francisco Garcia", color: "text-white font-bold" },
    { text: "Desarrollador Full Stack & Multiplataforma", color: "text-white" },
    { text: "> SKILLS --SUMMARY", color: "text-dim" },
    { text: "[React, Vite, Astro, Kotlin, Compose, Three.js, Tailwind v4]", color: "text-neon-amber" },
    { text: "> INSTAGRAM", color: "text-dim" },
    { text: "@frangarkl", color: "text-neon-cyan" }
  ];

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < fullLines.length) {
        const lineToAdd = fullLines[currentIdx];
        setLines((prev) => [...prev, lineToAdd]);
        currentIdx++;
      } else {
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot terminal-dot--red" />
          <div className="terminal-dot terminal-dot--amber" />
          <div className="terminal-dot terminal-dot--green" />
        </div>
        <span className="terminal-title">
          CONSOLA :: CORE_SYS
        </span>
      </div>
      <div className="terminal-body">
        {lines.map((line, idx) => (
          <div key={idx} className={line.color}>
            {line.text}
          </div>
        ))}
        <div className="text-neon-green terminal-cursor" />
      </div>
    </div>
  );
}
