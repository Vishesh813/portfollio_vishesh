import React, { useEffect, useState } from 'react';
import CustomDrawer from './components/Header/Drawer/index.jsx';
import Routers from './components/router.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import './App.css';

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <CustomDrawer 
          isOpen={isDrawerOpen} 
          onToggle={() => setIsDrawerOpen(!isDrawerOpen)}
          onClose={() => setIsDrawerOpen(false)}
        />
        <main className={`main-content ${isDrawerOpen ? 'drawer-open' : ''}`}>
          <Routers />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
