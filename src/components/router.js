
import React from 'react';
import Mainpage from './mainpage';
import About from './about';
import Project from './project';
import Resume from './resume'; 
import Contact from './contact';
import { Route, Routes } from 'react-router-dom';
const Routers = ()=> (
     <Routes>
      <Route exact path="/" element={<Resume/>} />
      <Route  path="/error" element={<About/>} />
      <Route  path="/project" element={<Project/>} />
      <Route  path="/resume" element={<Resume/>} />
      <Route  path="/contact" element={<Contact/>} />
     </Routes>
)

export default Routers;