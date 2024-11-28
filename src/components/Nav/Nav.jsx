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
      <Link to="/increment" className='nav-link'>Increment</Link>
      <Link to="/page1" className='nav-link'>Page1</Link>
      <Link to="/page2" className='nav-link'>Page2</Link>

    </nav>
  );
}

export default Nav;
