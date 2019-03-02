import React, { Component } from 'react';
import './App.css';
import { Layout,Header,Navigation,Drawer,Content } from 'react-mdl'; 
import {Link} from 'react-router-dom';
import  Routers from './components/router';
import photo from './img/vispro.jpg';

class App extends Component {
  render() {
    return (
     <div className="app">
    <Layout>
        <Header className="header-color" title={<Link to='/' style={{textDecoration:'none',color:'white', fontSize:'35px',fontFamily:'Lobster'}}> <img src={photo} 
    style = {{top:'0%',height:'35px',border:'3px solid',width:'35px',borderRadius:'50%'}} 
    /> MyJourney </Link>} scroll>  

            <Navigation >
                <Link style={{fontSize:'16px',fontWeight:'bold'}} to="/resume">Resume</Link>
                <Link style={{fontSize:'16px',fontWeight:'bold'}} to="/project">Project</Link>
                <Link style={{fontSize:'16px',fontWeight:'bold'}} to="/contact">Contact</Link>
                <Link style={{fontSize:'16px',fontWeight:'bold'}} to="/about">About</Link>
            </Navigation>
        </Header>
        <Drawer className="" title="MyJourney">
            <Navigation>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Routers/>
        </Content>
        {/* <Footer size="mini">
    <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer> */}
    </Layout>
   

</div>
      
    );
  }
}

export default App;
