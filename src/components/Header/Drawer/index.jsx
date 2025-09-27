import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Drawer.css';

const CustomDrawer = ({ isOpen, onToggle, onClose }) => {
  const location = useLocation();
  
  const menuItems = [
    { text: 'About', path: '/about' },
    { text: 'Education', path: '/education' },
    { text: 'Work Experience', path: '/work-experience' },
    { text: 'Skills', path: '/skills' },
    { text: 'Awards', path: '/awards' },
  ];

  // Function to check if a menu item should be active
  const isActive = (itemPath) => {
    const currentPath = location.pathname;
    // If we're on root path "/", show About as active
    if (currentPath === '/' && itemPath === '/about') {
      return true;
    }
    // For other paths, check exact match
    return currentPath === itemPath;
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button 
        className="hamburger-menu"
        onClick={onToggle}
        aria-label="Toggle navigation menu"
      >
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>

      {/* Overlay for mobile */}
      {isOpen && <div className="drawer-overlay" onClick={onClose}></div>}

      {/* Drawer */}
      <div className={`custom-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h3>Vishesh Tiwari</h3>
          <p>Full Stack Developer</p>
        </div>
        <div className="drawer-divider"></div>
        <nav className="drawer-nav">
          {menuItems.map((item) => (
            <Link
              key={item.text}
              to={item.path}
              className={`drawer-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={onClose}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default CustomDrawer;