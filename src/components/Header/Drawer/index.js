import React from 'react';
import { Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';

const CustomDrawer = () => {
    return (
        <>
            <Drawer className="" title="Vishesh Tiwari">
                <Navigation>
                    <Link to="/about">About</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/project">Project</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
        </>
    )
}

export default CustomDrawer;