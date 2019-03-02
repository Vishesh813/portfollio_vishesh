
import React from 'react';
import Mainpage from './mainpage';
import About from './about';
import Project from './project';
import Resume from './resume'; 
import Contact from './contact';
import { Switch,Route } from 'react-router-dom';
const Routers = ()=> (
     <Switch>
      <Route exact path="/" component={Mainpage} />
      <Route  path="/error" component={About} />
      <Route  path="/project" component={Project} />
      <Route  path="/resume" component={Resume} />
      <Route  path="/contact" component={Contact} />
     </Switch>
)

export default Routers;