import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/" className="btn">Home</Link></li>
        <li><Link to="/resume" className="btn">Resume</Link></li>
        <li><Link to="/project" className="btn">Projects</Link></li>
        <li><Link to="/contact" className="btn">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;