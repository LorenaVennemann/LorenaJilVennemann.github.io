import { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    // Force animations to restart on mount/reload
    const elements = document.querySelectorAll('.contact-card, .availability-badge');
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
        <h1 className="page-title">Let's Connect</h1>
        <p className="page-subtitle">Interested in working together or just having a tech talk? I look forward to hearing from you!</p>
      </div>

      <div className="contact-container">
        <div className="contact-intro">
          <div className="availability-badge">
            <span className="status-dot"></span>
            Open to new possibilities
          </div>
          <p>
            Whether you have questions about my projects or are interested in working together, I am always open to engaging conversations.
          </p>
        </div>

        <div className="contact-methods">
          <a href="mailto:jil.vennemann@gmail.com" className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>For direct inquiries</p>
            <span className="contact-link-text">jil.vennemann@gmail.com</span>
          </a>

          <a href="https://github.com/LorenaVennemann" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">💻</div>
            <h3>GitHub</h3>
            <p>Check out my code</p>
            <span className="contact-link-text">@LorenaVennemann</span>
          </a>

          <a href="https://www.linkedin.com/in/lorena-jil-vennemann-344b71289/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>Let's connect professionally</p>
            <span className="contact-link-text">Lorena Jil Vennemann</span>
          </a>
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Follow Me</h2>
          <div className="social-links">
            <a href="https://github.com/LorenaVennemann" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <img src="/src/assets/github.png" alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/lorena-jil-vennemann-344b71289/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <img src="/src/assets/linkdin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center', padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Response Time</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            I usually try to respond within 24-48 hours. For urgent inquiries, you can also contact me directly via LinkedIn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
