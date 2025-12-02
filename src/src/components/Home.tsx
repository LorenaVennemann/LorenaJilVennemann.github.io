import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import SplashScreen from './SplashScreen';

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [showSplash]);

  const handleSplashFinish = () => setShowSplash(false);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <main className="hero-section horizontal-scroll" ref={scrollRef}>
          <div className="mega-slogan">
            <div className="slogan-line">I BUILD</div>
            <div className="slogan-line accent">CODE</div>
            <div className="slogan-line">THAT WORKS</div>
            <div className="slogan-line">DAMN WELL</div>
          </div>
          <div className="center-strip-layout">
            <div className="vertical-ticker">
              <div className="ticker-content">
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
            <div className="images-stack">
              <div className="image-box">
                <img src="/src/assets/myselfboss.jpg" alt="Boss Pullover" className="side-img" />
                <p className="image-caption">Dev Confederation 2025</p>
              </div>
              <div className="image-box">
                <img src="/src/assets/motorrad.jpg" alt="Motorrad" className="side-img" />
                <p className="image-caption">Motorcycle Riding</p>
              </div>
            </div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="name-lorena">Lorena</span> <span className="name-jil">Jil</span> Vennemann
            </h1>

            <p className="hero-subtitle">
              4th-year Software <span className="red-text">Developer</span> Apprentice @ SIX
            </p>

            <div className="hero-tags">
              <span className="tag" style={{['--tag-index' as any]: 0}}>Backend</span>
              <span className="tag" style={{['--tag-index' as any]: 1}}>Frontend</span>
              <span className="tag" style={{['--tag-index' as any]: 2}}>Cloud Native</span>
              <span className="tag" style={{['--tag-index' as any]: 3}}>Git</span>
            </div>

            <div className="hero-cta">
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
              <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
