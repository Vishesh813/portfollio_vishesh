
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EducationSection from './EducationSection';
import AboutSection from './AboutSection';
import WorkExperienceSection from './WorkExperience';
import Skills from './Skills';
import Awards from './Awards';

const Routers = ()=> (
     <Switch>
      <Route exact  path="/" component={AboutSection} />
      <Route exact  path="/about" component={AboutSection} />
      <Route  path="/portfollio_vishesh" component={AboutSection}/>
      <Route  path="/education" component={EducationSection}/>
      <Route  path="/work-experience" component={WorkExperienceSection}/>
      <Route  path="/skills" component={Skills}/>
      <Route  path="/awards" component={Awards}/>

     </Switch>
)

export default Routers;