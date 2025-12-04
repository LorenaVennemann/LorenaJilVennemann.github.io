import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import SplashScreen from './SplashScreen';

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [verticalScroll, setVerticalScroll] = useState(0);
  const [showAboutSection, setShowAboutSection] = useState(false);

  useEffect(() => {
    if (showSplash) return;
    
    const container = scrollRef.current;
    if (!container) return;
    
      const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const scrollLeft = container.scrollLeft;
      const projectStart = window.innerWidth * 0.5;
      const projectEnd = window.innerWidth * 1.5;
      
      // Check if we're in the project zone
      const inProjectZone = scrollLeft >= projectStart && scrollLeft <= projectEnd;
      
      if (inProjectZone) {
        // In project zone: handle vertical scrolling of images
        if (verticalScroll >= 799 && e.deltaY > 0) {
          // At bottom of images, scrolling down → move horizontally to text
          container.scrollLeft += e.deltaY * 3;
          // Trigger text animation when leaving project zone
          if (scrollLeft + e.deltaY * 3 > projectEnd) {
            setShowAboutSection(true);
          }
        } else if (verticalScroll <= 1 && e.deltaY < 0) {
          // At top of images, scrolling up → move horizontally back to hero
          container.scrollLeft += e.deltaY * 3;
        } else {
          // Middle of images → scroll vertically
          setVerticalScroll(prev => Math.max(0, Math.min(800, prev + e.deltaY * 0.3)));
        }
      } else {
        // Outside project zone: always scroll horizontally
        container.scrollLeft += e.deltaY * 3;
        
        // Show/hide about section based on scroll position
        if (scrollLeft > projectEnd) {
          setShowAboutSection(true);
        } else {
          setShowAboutSection(false);
        }
        
        // Reset vertical scroll position when entering project zone
        if (scrollLeft < projectStart && e.deltaY > 0) {
          // Entering from left → start at top
          setVerticalScroll(0);
        } else if (scrollLeft > projectEnd && e.deltaY < 0) {
          // Entering from right → start at bottom
          setVerticalScroll(800);
        }
      }
    };    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [showSplash, verticalScroll]);

  const handleSplashFinish = () => setShowSplash(false);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <main className="stiff-home" ref={scrollRef}>
          {/* Section 1: Everything on one screen */}
          <section className="stiff-section main-hero-section">
            <div className="hero-headline">
              <h1 className="stiff-big-headline">
                <span className="headline-top">I BUILD</span>
                <span className="stiff-highlight">CODE</span>
                <span className="headline-bottom">THAT WORKS DAMN</span>
                <span className="headline-huge">WELL</span>
              </h1>
            </div>
            
            <div className="vertical-work-marquee">
              <div className="vertical-work-content">
                <span>DEVELOPER</span>
                <span>DEVELOPER</span>
                <span>DEVELOPER</span>
                <span>DEVELOPER</span>
                <span>DEVELOPER</span>
                <span>DEVELOPER</span>
                <span>DEVELOPER</span>
                <span>DEVELOPER</span>
              </div>
            </div>

            <div className="hero-projects" ref={projectsRef} style={{ transform: `translateY(-${verticalScroll}px)` }}>
              <div className="stiff-project-card">
                <div className="image-container">
                  <img src="/src/assets/myselfboss.jpg" alt="Dev Conference" style={{ objectPosition: 'center 55%' }} />
                </div>
                <div className="project-info">
                  <p className="project-company">SWISS DEV</p>
                  <h3 className="project-title">CONFEDERATION 2025</h3>
                </div>
              </div>
              <div className="stiff-project-card">
                <div className="image-container">
                  <img src="/src/assets/motorrad.jpg" alt="Motorcycle" style={{ objectPosition: 'center 80%' }} />
                </div>
                <div className="project-info">
                  <p className="project-company">PERSONAL</p>
                  <h3 className="project-title">MOTORCYCLE</h3>
                </div>
              </div>
              
              <Link to="/about" className="view-all-work">
                <span>GET TO KNOW ME BETTER</span>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M8 20H32M32 20L20 8M32 20L20 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* About Text - Same Section */}
            <div className={`about-section-inline ${showAboutSection ? 'visible' : ''}`} ref={aboutRef}>
              <div className="circular-badge">
                <svg viewBox="0 0 200 200" className="badge-svg">
                  <path id="curve" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="transparent"/>
                  <text className="badge-text">
                    <textPath href="#curve">
                      ★ QUALITY CODE ★ QUALITY CODE ★ QUALITY CODE
                    </textPath>
                  </text>
                  <circle cx="100" cy="100" r="40" fill="none" stroke="#e8dcc4" strokeWidth="2"/>
                  <text x="100" y="95" className="badge-emoji" textAnchor="middle" fontSize="30">👀</text>
                </svg>
              </div>
              
              <div className="about-content">
                <h2 className="about-headline">
                  For <span>four</span> years, <strong>I'VE</strong> <span>been</span> learning, <span>building</span> systems, <strong>SOLVING</strong> <span>problems</span>, 
                  and <strong>CRAFTING</strong> <span>reliable</span> code for enterprise and personal <strong>PROJECTS</strong>.
                </h2>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Home;
