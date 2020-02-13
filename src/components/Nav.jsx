import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 16px'
  }
  const linkStyle = {
    color: 'white',
    paddingLeft: '8px'
  }
  const heroText = {
    fontWeight: 'bold',
    fontSize: '16px'
  }
  return (
    <div style={navStyle}>
      <p style={heroText}>Super Awesome Company</p>
      <div>
      <Link style={linkStyle} to='/aboutus'>About Us</Link>
      <Link style={linkStyle} to='/careers'>Careers</Link>
      </div>
    </div>
  )
}

export default Nav;
