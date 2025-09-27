
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EducationSection from './EducationSection/index.jsx';
import AboutSection from './AboutSection/index.jsx';
import WorkExperienceSection from './WorkExperience/index.jsx';
import Skills from './Skills/index.jsx';
import Awards from './Awards/index.jsx';

const Routers = () => (
  <Routes>
    <Route path="/" element={<AboutSection />} />
    <Route path="/about" element={<AboutSection />} />
    <Route path="/portfollio_vishesh" element={<AboutSection />} />
    <Route path="/education" element={<EducationSection />} />
    <Route path="/work-experience" element={<WorkExperienceSection />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/awards" element={<Awards />} />
  </Routes>
);

export default Routers;