import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load all components
const AboutSection = lazy(() => import('./AboutSection/index.jsx'));
const EducationSection = lazy(() => import('./EducationSection/index.jsx'));
const WorkExperienceSection = lazy(() => import('./WorkExperience/index.jsx'));
const Skills = lazy(() => import('./Skills/index.jsx'));
const Awards = lazy(() => import('./Awards/index.jsx'));
const Projects = lazy(() => import('./Projects/index.jsx'));

// Loading component
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  </div>
);

const Routers = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<AboutSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/education" element={<EducationSection />} />
        <Route path="/work-experience" element={<WorkExperienceSection />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/awards" element={<Awards />} />
        {/* Catch-all route for any unmatched paths */}
        <Route path="*" element={<AboutSection />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;