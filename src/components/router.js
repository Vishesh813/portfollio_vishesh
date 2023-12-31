
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EducationSection from './EducationSection';
import AboutSection from './AboutSection';
import WorkExperienceSection from './WorkExperience';
import Skills from './Skills';
import Awards from './Awards';

const Routers = ()=> (
     <Switch>
      <Route exact path="/portfollio_vishesh" element={<AboutSection/>} />
      <Route  path="/about"><AboutSection/></Route>
      <Route  path="/education"><EducationSection/></Route>
      <Route  path="/work-experience"><WorkExperienceSection/></Route>
      <Route  path="/skills"><Skills/></Route>
      <Route  path="/awards"><Awards/></Route>
     </Switch>
)

export default Routers;