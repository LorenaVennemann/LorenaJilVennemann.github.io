import { Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPostDEV = () => {
  return (
    <div className="blog-post-page">
      <div className="blog-detail">
        <Link to="/blog" className="back-link">← Back to Blog</Link>
        
        <div className="blog-detail-header">
          <span className="blog-detail-category">Dev Event</span>
          <h1>Swiss Dev Confederation 2025 – My Event Highlight</h1>
          <div className="blog-detail-meta">
            <span>📅 23 September 2025</span>
            <span>⏱️ 3 min read</span>
          </div>
        </div>
        
        <div className="blog-content">
          <p>
            My first major developer event! Swiss Dev Confederation 2025 was packed with exciting talks on 
            cloud-native development, AI, and OpenShift. I was particularly impressed by the sessions on OpenShift and AI topics – 
            a day full of inspiration and new technologies!
          </p>

          <h2>Highlights of the talks</h2>
          <ul>
            <li><strong>Burr Sutter:</strong> "Paving the Golden Path" – Insights into platform engineering and developer experience.</li>
            <li><strong>Kevin Dubois:</strong> Tips & tricks for Kubernetes native Java applications – from zero to production readiness</li>
            <li><strong>Simon Krenger & Team:</strong> OpenShift Roadmap & Community Insights</li>
          </ul>

          <h2>My impressions</h2>
          <p>
            The talks showed me how closely cloud-native development, AI, and container orchestration are linked. 
            All the speakers I highlighted delivered their sessions exceptionally well, and Burr Sutter was a particularly inspiring presenter.
          </p>

          <h2>Why such events are important</h2>
          <p>
            As an aspiring developer, attending events like this helps me learn a lot and meet many other people in the field. 
            It's a great way to build connections, exchange ideas, and see current technologies in action.
          </p>    

          <h2>Conclusion</h2>
          <p>
            Swiss Dev Confederation 2025 was a huge success for me: exciting talks  and valuable insights into cloud-native development, AI, and OpenShift.
            I'm already looking forward to the next developer event!
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
            <Link to="/blog/openshift" className="related-card">
              <h4>OpenShift</h4>
              <p>How it started</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDEV;
