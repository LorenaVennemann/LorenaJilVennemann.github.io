
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="navbar">
    <div className="navbar-logo">Lorena</div>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/project">Project</Link></li>
    </ul>
  </nav>
);

export default Navbar;
