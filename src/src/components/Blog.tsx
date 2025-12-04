import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
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
    <main className="blog-horizontal-container" ref={scrollRef}>
      {/* Section 1: Hero */}
      <section className="blog-section hero-section">
        <div className="blog-hero-content">
          <h1 className="blog-big-headline">
            <span className="blog-headline-top">DEVELOPER</span>
            <span className="blog-highlight">BLOG</span>
            <span className="blog-headline-bottom">THOUGHTS & LEARNINGS</span>
          </h1>
        </div>
      </section>

      {/* Section 2: Featured Post - DINAcon (Newest) */}
      <section className="blog-section post-section">
        <article className="blog-post-card featured">
          <span className="featured-badge">LATEST</span>
          <div className="post-meta">
            <span className="post-date">📅 18 November 2025</span>
            <span className="post-category">EVENT</span>
          </div>
          <h2>DINAcon 2025 – Digital Sustainability</h2>
          <p className="post-excerpt">
            On November 18, 2025, I attended DINAcon – the conference for digital sustainability 
            in Switzerland. Inspiring talks about open source, sustainable software development, 
            and the future of digital infrastructure.
          </p>
          <Link to="/blog/dinacon" className="read-more-btn">READ MORE →</Link>
        </article>
      </section>

      {/* Section 3: Swiss Dev Confederation */}
      <section className="blog-section post-section">
        <article className="blog-post-card">
          <div className="post-meta">
            <span className="post-date">📅 23 September 2025</span>
            <span className="post-category">EVENT</span>
          </div>
          <h2>Swiss Dev Confederation 2025</h2>
          <p className="post-excerpt">
            My first major developer event! Swiss Dev Confederation 2025 was full of exciting talks on 
            cloud-native development, AI, and OpenShift. A day full of inspiration and new technologies!
          </p>
          <Link to="/blog/dev-event" className="read-more-btn">READ MORE →</Link>
        </article>
      </section>

      {/* Section 4: OpenShift Post */}
      <section className="blog-section post-section">
        <article className="blog-post-card">
          <div className="post-meta">
            <span className="post-date">📅 24 Mai 2025</span>
            <span className="post-category">OPENSHIFT</span>
          </div>
          <h2>Getting Started with OpenShift</h2>
          <p className="post-excerpt">
            My first steps with OpenShift and why container orchestration is the future. 
            From the basics to my first successful deployment—a personal retrospective 
            of my learnings and challenges.
          </p>
          <Link to="/blog/openshift" className="read-more-btn">READ MORE →</Link>
        </article>
      </section>

      {/* Section 5: Coming Soon */}
      <section className="blog-section coming-soon-section">
        <div className="coming-soon-content">
          <h2 className="coming-soon-title">MORE ARTICLES</h2>
          <p className="coming-soon-subtitle">COMING SOON</p>
          <p className="coming-soon-text">
            More blog posts are coming soon. I will be attending the Red Hat Summit event in January and will also be writing a blog about it.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Blog;
