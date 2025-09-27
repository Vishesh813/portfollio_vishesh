import React, { useEffect, useState } from 'react';
import CustomDrawer from './components/Header/Drawer';
import Routers from './components/router';
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
  );
};

export default App;
