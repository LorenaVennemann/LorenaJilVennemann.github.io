import { useRef, useEffect } from 'react';
import './About.css';

const About = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY * 3;
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <main className="about-horizontal-container" ref={scrollRef}>
      {/* Section 1: Hero */}
      <section className="about-section hero-section">
        <div className="about-hero-content">
          <h1 className="about-big-headline">
            <span className="about-headline-top">CRAFTING</span>
            <span className="about-highlight">SOFTWARE</span>
            <span className="about-headline-bottom">SINCE 2022</span>
          </h1>
        </div>
      </section>

      {/* Section 2: Profile */}
      <section className="about-section profile-section">
        <div className="profile-layout">
          <div className="profile-image-side">
            <img 
              src="/src/assets/myself.jpg" 
              alt="Lorena Jil Vennemann" 
              className="profile-image-large"
            />
          </div>
          <div className="profile-text-side">
            <h2 className="profile-name-large">LORENA JIL VENNEMANN</h2>
            <p className="profile-role">SOFTWARE DEVELOPER APPRENTICE @ SIX</p>
            <p className="profile-description">
              4th-year apprentice specializing in backend systems and cloud-native applications.
              Strong focus on Java, React, and scalable architecture. International experience 
              at Archr in Stockholm. Passionate about clean code and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Skills */}
      <section className="about-section skills-section-main">
        <div className="skills-container">
          <h2 className="section-main-heading">TECH STACK</h2>
          <div className="skills-grid-main">
            <div className="skill-box">
              <h3>Backend</h3>
              <p>Java · Spring Boot · REST APIs<br/>SQL · MySQL · C++</p>
            </div>
            <div className="skill-box">
              <h3>Frontend</h3>
              <p>React · TypeScript · JavaScript<br/>ES6+ · CSS · Responsive Design</p>
            </div>
            <div className="skill-box">
              <h3>Cloud & DevOps</h3>
              <p>OpenShift · Kubernetes · Docker<br/>Podman · CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Journey & Hobbies */}
      <section className="about-section journey-hobbies-section">
        <div className="journey-hobbies-container">
          <div className="journey-block">
            <h2 className="section-main-heading">JOURNEY</h2>
            <div className="timeline-list">
              <div className="timeline-entry">
                <span className="year">2025</span>
                <span className="desc">4th Year @ SIX · IPA Preparation</span>
              </div>
              <div className="timeline-entry">
                <span className="year">2025</span>
                <span className="desc">Archr Stockholm · International Experience</span>
              </div>
              <div className="timeline-entry">
                <span className="year">2022</span>
                <span className="desc">Started Apprenticeship @ SIX</span>
              </div>
            </div>
          </div>

          <div className="hobbies-block">
            <h2 className="section-main-heading">HOBBIES</h2>
            <div className="hobbies-grid">
              <span>🏍️ Motorcycles</span>
              <span>🥋 Martial Arts</span>
              <span>🎵 Music</span>
              <span>💪 Fitness</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Future */}
      <section className="about-section future-section">
        <div className="future-layout">
          <h2 className="future-main-heading">IPA 2025 & FUTURE PLANS</h2>
          <div className="future-cards">
            <div className="future-box">
              <h3>CURRENT FOCUS</h3>
              <p>
                Preparing for my final IPA project. My goal is to successfully complete 
                the IPA and finish my apprenticeship on a strong note.
              </p>
            </div>
            <div className="future-box">
              <h3>WHAT'S NEXT</h3>
              <p>
                After completing my apprenticeship, I plan to pursue the BMS 
                (Berufsmaturitätsschule) to further expand my education and career opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
