import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../../contexts/ThemeContext.jsx';
import './Drawer.css';

const CustomDrawer = ({ isOpen, onToggle, onClose }) => {
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();
  
  const menuItems = [
    { text: 'About', path: '/about' },
    { text: 'Education', path: '/education' },
    { text: 'Work Experience', path: '/work-experience' },
    { text: 'Projects', path: '/projects' },
    { text: 'Skills', path: '/skills' },
    { text: 'Awards', path: '/awards' },
  ];

  // Function to check if a menu item should be active
  const isActive = (itemPath) => {
    let currentPath = location.pathname;
    
    // Remove base path if present to normalize the path
    if (currentPath.startsWith('/portfollio_vishesh')) {
      currentPath = currentPath.replace('/portfollio_vishesh', '') || '/';
    }
    
    // Handle About page - it should be active for home routes
    if (itemPath === '/about') {
      const isHomePage = currentPath === '/' || currentPath === '/about';
      return isHomePage;
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
        <div className="drawer-footer">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            <span className="theme-icon">{isDark ? '☀️' : '🌙'}</span>
            <span className="theme-text">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomDrawer;