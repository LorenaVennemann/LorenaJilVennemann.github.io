import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import BlogPostDEV from './components/BlogPostDEV';
import BlogPostOpenShift from './components/BlogPostOpenShift';
import BlogPostDINAcon from './components/BlogPostDINAcon';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';





function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/dev-event" element={<BlogPostDEV />} />
        <Route path="/blog/openshift" element={<BlogPostOpenShift />} />
        <Route path="/blog/dinacon" element={<BlogPostDINAcon />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
