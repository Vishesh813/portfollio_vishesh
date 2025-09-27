import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import routeConfig from '../data/routeConfig.json';

// Dynamic component loader
const componentMap = {
  AboutSection: lazy(() => import('./AboutSection/index.jsx')),
  EducationSection: lazy(() => import('./EducationSection/index.jsx')),
  WorkExperienceSection: lazy(() => import('./WorkExperience/index.jsx')),
  Skills: lazy(() => import('./Skills/index.jsx')),
  Awards: lazy(() => import('./Awards/index.jsx')),
  Projects: lazy(() => import('./Projects/index.jsx'))
};

// Loading component
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  </div>
);

// Dynamic route generator
const generateRoutes = () => {
  return routeConfig.routes.map((route) => {
    const Component = componentMap[route.component];
    
    if (!Component) {
      console.warn(`Component ${route.component} not found in componentMap`);
      return null;
    }

    return (
      <Route
        key={route.id}
        path={route.path}
        element={<Component />}
      />
    );
  }).filter(Boolean);
};

// Get fallback component
const getFallbackComponent = () => {
  const fallbackComponentName = routeConfig.fallback.component;
  return componentMap[fallbackComponentName] || componentMap.AboutSection;
};

const Routers = () => {
  const FallbackComponent = getFallbackComponent();
  
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {generateRoutes()}
        {/* Catch-all route for any unmatched paths */}
        <Route path="*" element={<FallbackComponent />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;