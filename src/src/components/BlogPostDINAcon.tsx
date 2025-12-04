import { Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPostDINAcon = () => {
  return (
    <div className="blog-post-page">
      <div className="blog-detail">
        <Link to="/blog" className="back-link">← Back to Blog</Link>
        
        <div className="blog-detail-header">
          <span className="blog-detail-category">Event</span>
          <h1>DINAcon 2025 – Digital Sustainability Conference</h1>
          <div className="blog-detail-meta">
            <span>📅 18 November 2025</span>
            <span>⏱️ 4 min read</span>
          </div>
        </div>
        
        <div className="blog-content">
          <p>
            On November 18, 2025, I attended DINAcon – the conference for digital sustainability in Switzerland. 
            The event brought together developers, open source enthusiasts, public administration representatives, 
            and tech professionals to discuss sustainable digital solutions, AI, mobility data, and the future of 
            open technologies.
          </p>

          <h2>What is DINAcon?</h2>
          <p>
            DINAcon (Digital Infrastructure for the Nation Conference) is an annual Swiss conference focused on 
            digital sustainability, open source software, and open data. This year's topics ranged from AI in public 
            administration to mobility data infrastructure and digital sovereignty – all with a strong focus on 
            openness and sustainability.
          </p>

          <h2>What I Experienced</h2>
          <p>
            The conference started strong with Paula Grzegorzewska's opening talk "First, recognition, next - strategy. 
            On open source in European policy." It set the perfect tone for the day – showing how open source is finally 
            getting the recognition it deserves at the policy level, and what strategic steps need to follow.
          </p>
          
          <p>
            The day was packed with fascinating topics ranging from AI in public administration to mobility data 
            infrastructure, digital sovereignty, and decentralized social media. The variety of perspectives – from 
            government officials to developers to policy makers – made for really enriching discussions.
          </p>

          <blockquote>
            Digital sustainability means building software that lasts, is transparent, 
            and benefits the community – not just individual companies. Switzerland has the potential 
            to lead the way in showing how this can be done.
          </blockquote>

          <h2>Key Themes of the Day</h2>
          <ul>
            <li><strong>Open Source Recognition:</strong> How European policy is finally embracing open source as a strategic advantage</li>
            <li><strong>Digital Sovereignty:</strong> Switzerland's need to maintain control over its digital infrastructure</li>
            <li><strong>AI & Ethics:</strong> Thoughtful implementation of AI in public services with privacy in mind</li>
            <li><strong>Community-Driven Development:</strong> The power of collaborative open source projects</li>
            <li><strong>Sustainability:</strong> Environmental impact and long-term maintainability of digital solutions</li>
          </ul>

          <h2>The Atmosphere</h2>
          <p>
            What made DINAcon special wasn't just the content – it was the community. Meeting people who genuinely 
            care about building technology that serves society, not just profits, was inspiring. The evening HACKnight 
            showed the practical side of this philosophy, with people actually working together on open source projects.
          </p>

          <h2>Looking Forward</h2>
          <p>
            DINAcon 2025 reinforced my belief that we need to build technology that serves society, not just 
            corporate interests. As a developer at SIX and future BMS student, I want to contribute to creating 
            open, sustainable, and sovereign digital solutions.
          </p>
          
          <p>
            I'm already looking forward to DINAcon 2026 and continuing to be part of this amazing community!
          </p>
        </div>

        <div className="author-section">
          <h3>Author</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Lorena Jil Vennemann<br />
            Thank you for reading!
          </p>
        </div>

        <div className="related-posts">
          <h3>Further articles</h3>
          <div className="related-grid">
            <Link to="/blog/dev-event" className="related-card">
              <h4>Swiss Dev Confederation 2025</h4>
              <p>My first major developer event</p>
            </Link>
            <Link to="/blog/openshift" className="related-card">
              <h4>Getting Started with OpenShift</h4>
              <p>My journey into container orchestration</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDINAcon;
