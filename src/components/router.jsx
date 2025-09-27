import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EducationSection from './EducationSection/index.jsx';
import AboutSection from './AboutSection/index.jsx';
import WorkExperienceSection from './WorkExperience/index.jsx';
import Skills from './Skills/index.jsx';
import Awards from './Awards/index.jsx';
import Projects from './Projects/index.jsx';

const Routers = () => {
  return (
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
  );
};

export default Routers;