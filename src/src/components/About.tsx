import { useEffect, useRef } from 'react';
import './About.css';
import './Home.css';

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.card, .section-title, .two-column > *, .skills-grid > *');
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.animation = 'none';
      void htmlEl.offsetHeight;
      htmlEl.style.animation = '';
    });
  }, []);

  const initialRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = initialRef.current;
    if (!el)
      return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.25) {
          el.classList.add('in-view');
        } else {
          el.classList.remove('in-view');
        }

        if (entry.intersectionRatio >= 0.6) {
          el.classList.add('image-in');
        } else {
          el.classList.remove('image-in');
        }
      });
    }, { threshold: [0, 0.25, 0.6] });

    obs.observe(el);
    return () => obs.disconnect();
  }, []);


  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">CRAFTING <span className="slogan-line accent">SOFTWARE</span></h2>
          <p className="hero-subtitle">built with care — since 2022</p>
        </div>
      </section>
      
      <div className="page-header">
        <h1 className="page-title">Lorena</h1>
        <p className="page-name">Lorena Jil Vennemann</p>
        <p className="page-subtitle">
          Software Developer Apprentice @ SIX
        </p>
        <div className="hero-tags">
          <span className="tag">Java</span>
          <span className="tag">React</span>
          <span className="tag">TypeScript</span>
          <span className="tag">Cloud Native</span>
        </div>
      </div>

      <section ref={initialRef as any} className="initial-section">
        <div className="initial-letter">L</div>
        <div className="initial-image">
          <img src="/src/assets/myself.jpg" alt="Lorena Jil Vennemann" />
        </div>
      </section>

      <section>
        <div className="card">
          <h3>About Me</h3>
          <p>
            4th-year Software Developer Apprentice at <strong>SIX</strong>, specializing in backend systems and cloud-native applications. 
            Strong focus on <strong>Java</strong>, <strong>React</strong>, and scalable architecture.
          </p>
          <p style={{ marginTop: '1rem' }}>
            International experience at <strong>Archr</strong> in Stockholm, working in a fast-paced startup environment.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 className="section-title">Journey</h2>
        <div className="card">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">4th Year @ SIX · IPA Preparation · Advanced Backend Development</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">Archr Stockholm · International Startup Experience</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">Started Apprenticeship @ SIX · Software Developer EFZ</div>
            </div>
          </div>
        </div>
      </section>

      <div className="two-column">
        <div className="card interests-card">
          <h3>Interests</h3>
          <ul className="interests-list">
            <li><span className="interest-icon">🏍️</span> Motorcycles</li>
            <li><span className="interest-icon">🥋</span> Martial Arts</li>
            <li><span className="interest-icon">🎵</span> Music</li>
            <li><span className="interest-icon">💪</span> Fitness</li>
          </ul>
        </div>
        <div className="card">
          <h3>Philosophy</h3>
          <p>
            Clean code. Thorough testing. Continuous learning. 
            Building scalable, reliable applications that work damn well.
          </p>
        </div>
      </div>

      <section className="skills-section">
        <h2 className="section-title">Tech Stack</h2>
        <div className="skills-grid">
          <div className="card skill-card">
            <h3>Backend</h3>
            <ul>
              <li><strong>Java</strong> · Spring Boot · REST APIs</li>
              <li><strong>SQL</strong> · MySQL · Database Design</li>
              <li><strong>C++</strong> · Performance Optimization</li>
            </ul>
          </div>
          <div className="card skill-card">
            <h3>Frontend</h3>
            <ul>
              <li><strong>React</strong> · TypeScript · Hooks</li>
              <li><strong>JavaScript</strong> · ES6+ · Async</li>
              <li><strong>CSS</strong> · Responsive Design</li>
            </ul>
          </div>
          <div className="card skill-card">
            <h3>Cloud & DevOps</h3>
            <ul>
              <li><strong>OpenShift</strong> · Kubernetes</li>
              <li><strong>Docker</strong> · Podman</li>
              <li><strong>CI/CD</strong> · Deployments</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Current Focus</h2>
        <div className="card focus-card">
          <h3>IPA 2025</h3>
          <p>
            Preparing for my final IPA project with <strong>TypeScript</strong> and <strong>Java</strong>. 
            Focus on enterprise-grade software, cloud-native architecture, and DevOps best practices.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
