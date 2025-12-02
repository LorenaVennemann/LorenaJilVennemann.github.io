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
          <div className="hero-tags">
            <span className="tag">Java & Spring Boot</span>
            <span className="tag">React & TypeScript</span>
            <span className="tag">Cloud Native</span>
            <span className="tag">DevOps</span>
          </div>
        </div>
      </section>
      <div className="page-header">
        <h1 className="page-title">Lorena Jil Vennemann</h1>
        <p className="page-subtitle">
          Software Developer Apprentice specializing in Backend Development & Cloud-Native Technologies
        </p>
        <div className="hero-tags">
          <span className="tag">Java & Spring Boot</span>
          <span className="tag">React & TypeScript</span>
          <span className="tag">Cloud Native</span>
          <span className="tag">DevOps</span>
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
          <h3>Professional Background</h3>
          <p>
            I am currently in my 4th year as a Software Developer Apprentice at SIX, where I focus on 
            building robust backend systems and modern cloud-native applications. My technical expertise 
            centers around <strong>Java</strong> and <strong>React</strong>, with a strong emphasis on 
            scalable architecture and performance optimization.
          </p>
          <p style={{ marginTop: '1rem' }}>
            During my apprenticeship, I gained valuable international experience working at <strong>Archr</strong> in Stockholm for one month. This opportunity provided me with insights into professional software development practices in an international setting and enhanced my ability to collaborate across diverse teams.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 className="section-title">Professional Journey</h2>
        <div className="card">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2025 – Present</div>
              <div className="timeline-content">4th Year Software Developer Apprentice at SIX – Focus on advanced backend development and final project (IPA) preparation</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">Worked at a startup in Stockholm – Gained hands-on experience in a fast-paced international tech environment</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022 – Present</div>
              <div className="timeline-content">Software Developer Apprenticeship at SIX – Started the apprenticeship and built a strong foundation in software development</div>
            </div>
          </div>
        </div>
      </section>

      <div className="two-column">
        <div className="card">
          <h3>Development Philosophy</h3>
          <p>
            I am passionate about creating applications that are scalable, reliable, and maintainable. My approach emphasizes clean code, thorough testing, and continuous learning. I particularly enjoy API development, performance optimization, and exploring emerging technologies that can enhance software quality.
          </p>
        </div>
        <div className="card interests-card">
          <h3>Personal Interests</h3>
          <ul className="interests-list">
            <li><span className="interest-icon">🏍️</span> Motorcycle riding and maintenance</li>
            <li><span className="interest-icon">🥋</span> Martial arts and fitness training</li>
            <li><span className="interest-icon">🎵</span> Music appreciation</li>
          </ul>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            Outside of software development, I maintain an active lifestyle through martial arts and regular gym training, which helps me stay focused and disciplined in both personal and professional pursuits.
          </p>
        </div>
      </div>

      <section className="skills-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="card skill-card">
            <h3>Backend Development</h3>
            <ul>
              <li><strong>Java</strong> – Spring Boot, REST APIs, Microservices Architecture</li>
              <li><strong>SQL</strong> – Database Design, HeidiSQL, MySQL</li>
              <li><strong>C++</strong> – Fundamentals & Performance Optimization</li>
            </ul>
          </div>
          <div className="card skill-card">
            <h3>Frontend Development</h3>
            <ul>
              <li><strong>React</strong> – Hooks, Context API, State Management</li>
              <li><strong>TypeScript / JavaScript</strong> – ES6+, Async Patterns</li>
              <li><strong>HTML/CSS</strong> – Responsive Design, Modern Layouts</li>
            </ul>
          </div>
          <div className="card skill-card">
            <h3>Cloud & DevOps</h3>
            <ul>
              <li><strong>OpenShift</strong> – Container Platform & Deployments</li>
              <li><strong>Kubernetes</strong> – Orchestration & Service Management</li>
              <li><strong>Docker & Podman</strong> – Containerization</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Current Focus</h2>
        <div className="card focus-card">
          <h3>IPA Preparation & Professional Development</h3>
          <p>
            I am currently preparing for my IPA (Individual Practical Assignment) as part of the Swiss Software Developer EFZ qualification. This intensive phase involves working extensively with <strong>TypeScript</strong> and <strong>Java</strong> on real-world applications, further developing my expertise in enterprise-grade software development.
          </p>
          <p style={{ marginTop: '1rem' }}>
            My goal is to continue advancing my skills in backend architecture, cloud-native technologies, and DevOps practices, positioning myself as a well-rounded software engineer capable of delivering high-quality, production-ready solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
