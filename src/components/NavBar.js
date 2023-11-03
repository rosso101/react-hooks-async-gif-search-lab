import React from 'react';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
