import { useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    // Force animations to restart on mount/reload
    const elements = document.querySelectorAll('.project-card, .section-title');
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.animation = 'none';
      void htmlEl.offsetHeight;
      htmlEl.style.animation = '';
    });
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Opensource Projects</h1>
        <p className="page-subtitle">A selection of my work from newest to oldest - showcasing my journey and growth</p>
      </div>

      <div className="projects-grid">
        {/* Project 3: Security Learning Project */}
        <div className="project-card">
          <div className="project-header">
            <div>
              <h3>Security Vulnerabilities App (Modul 183)</h3>
              <div className="project-badges">
                <span className="project-status status-completed">Completed</span>
                <span className="project-date">Created: Apr 14, 2025</span>
              </div>
            </div>
          </div>
          <p className="project-description">
            School project in Module 183 (Application Security): A deliberately insecure to-do list application in which we had to identify and fix various security vulnerabilities as a team. The project helped me understand and close common security vulnerabilities such as SQL injection, XSS, insecure authentication, and faulty authorization.
          </p>
          <div className="tech-stack">
            <span className="tech-tag">HTML</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">EJS</span>
            <span className="tech-tag">CSS</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/LorenaVennemann/LB2-183" className="project-link" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>

        {/* Project 1: AkwardSilents */}
        <div className="project-card">
          <div className="project-header">
            <div>
              <h3>AkwardSilents (Chat App)</h3>
              <div className="project-badges">
                <span className="project-status status-completed">Completed</span>
                <span className="project-date">Created: Jan 22, 2024</span>
              </div>
            </div>
          </div>
          <p className="project-description">
            School project: A chat application similar to WhatsApp, implemented within 8 weeks. Includes front-end and back-end components, real-time messaging, and user management.
          </p>
          <div className="tech-stack">
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">Go</span>
          </div>
          <div className="project-links">
            <a href="#" className="project-link disabled" onClick={(e) => { e.preventDefault(); alert('This repository is private and cannot be viewed.'); }}>View Frontend Code (Private)</a>
            <a href="#" className="project-link disabled" onClick={(e) => { e.preventDefault(); alert('This repository is private and cannot be viewed.'); }}>View Backend Code (Private)</a>
          </div>
        </div>

        {/* Project 4: Espresso Shop */}
        <div className="project-card">
          <div className="project-header">
            <div>
              <h3>Espresso Shop (Modul 322)</h3>
              <div className="project-badges">
                <span className="project-status status-completed">Completed</span>
                <span className="project-date">Created: Nov 6, 2023</span>
              </div>
            </div>
          </div>
          <p className="project-description">
            E-Commerce Website für einen fiktiven Kaffee-Shop im Modul 322. Eine vollständige Online-Shop Anwendung mit React, wo Kunden verschiedene Kaffeesorten durchsuchen und kaufen können. Das Projekt half mir, React-Komponenten, State Management und die Erstellung einer interaktiven Benutzeroberfläche zu lernen.
          </p>
          <div className="tech-stack">
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">CSS</span>
            <span className="tech-tag">HTML</span>
            <span className="tech-tag">REACT</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/LorenaVennemann/Espresso.M322TBZ/tree/main/Aufgaben%20React%20Vorbereitung" className="project-link" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>

        {/* Project: REST API Applikation */}
        <div className="project-card">
          <div className="project-header">
            <div>
              <h3>REST API Applikation</h3>
              <div className="project-badges">
                <span className="project-status status-completed">Completed</span>
                <span className="project-date">Created: Mar 24, 2023</span>
              </div>
            </div>
          </div>
          <p className="project-description">
            This project is a REST API application created with Spring Boot as a project for üK 295: Backend Development. The application uses PostgreSQL as its database and can be run with Docker, Intellij, and Postman. After startup, endpoints can be tested via Swagger UI.
          </p>
          <div className="tech-stack">
            <span className="tech-tag">Java</span>
            <span className="tech-tag">Spring Boot</span>
            <span className="tech-tag">REST API</span>
            <span className="tech-tag">Docker</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">Postman</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/Timofey-Makhankov/ueK_295TiMak_Projekt_Arbeit" className="project-link" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>

        {/* Project 2: JustBakeCookies */}
        <div className="project-card">
          <div className="project-header">
            <div>
              <h3>JustBakeCookies</h3>
              <div className="project-badges">
                <span className="project-status status-first">My First Website</span>
                <span className="project-status status-completed">Completed</span>
                <span className="project-date">Created: Dec 9, 2022</span>
              </div>
            </div>
          </div>
          <p className="project-description">
            My very first website from my first year of training! A small site with cookie recipes, several subpages, and even responsive design. This project was my introduction to web development and taught me the basics of HTML and CSS. Today, not everything works perfectly anymore, but I don't want to change anything—it's my reminder of how I started.
          </p>
          <div className="tech-stack">
            <span className="tech-tag">HTML</span>
            <span className="tech-tag">CSS</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/LorenaVennemann/JustBakeCookies" className="project-link" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>

        {/* Project 3: First C Program */}
        <div className="project-card">
          <div className="project-header">
            <div>
              <h3>Guess My Number Game</h3>
              <div className="project-badges">
                <span className="project-status status-first">My First C Program</span>
                <span className="project-status status-completed">Completed</span>
                <span className="project-date">Created: Oct 5, 2022</span>
              </div>
            </div>
          </div>
          <p className="project-description">
            My very first program in C after only one month of training! A simple number guessing game where the player has to guess a random number between 1 and 100—with eight attempts and hints as to whether the number is higher or lower. This project taught me the basics of C: variables, loops, conditions, and user input.
          </p>
          <div className="tech-stack">
            <span className="tech-tag">C</span>
            <span className="tech-tag">C++</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/LorenaVennemann/-Done-of-Done---L.J.V/blob/main/Defenition_of_Done%20_eigenes_file/main.c" className="project-link" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="project-card" style={{ border: '2px dashed rgba(255, 255, 255, 0.1)', background: 'transparent' }}>
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h3 style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>More Projects Coming Soon</h3>
            <p style={{ color: 'var(--text-muted)' }}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
