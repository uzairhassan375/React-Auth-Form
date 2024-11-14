import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => { 
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/todo" className="nav-link">Todo</Link>
      <Link to="/about" className="nav-link">About us</Link>
      <Link to="/auth" className="nav-link">Authentication</Link>
    </nav>
  );
}

export default Nav;
