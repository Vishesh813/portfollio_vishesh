import React from 'react';
import { Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import photo from '../../img/vispro.jpg';
import CustomDrawer from './Drawer';

const CustomHeader = () => {
    return (
        <>
            <Header scroll>
                <Navigation >
                    <Link style={{ fontSize: '16px', fontWeight: 'bold' }} to="/resume">Resume</Link>
                    <Link style={{ fontSize: '16px', fontWeight: 'bold' }} to="/project">Project</Link>
                    <Link style={{ fontSize: '16px', fontWeight: 'bold' }} to="/contact">Contact</Link>
                    <Link style={{ fontSize: '16px', fontWeight: 'bold' }} to="/about">About</Link>
                </Navigation>
            </Header>
            <CustomDrawer />
        </>
    )
}

export default CustomHeader;