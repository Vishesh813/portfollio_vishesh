import React from 'react';
import './App.css';
import { Layout, Content } from 'react-mdl';
import CustomDrawer from './components/Header/Drawer';
import Routers from './components/router';

const App = () => {
    return (
    <>
        <Layout fixedDrawer>
            <CustomDrawer />
            <Content><Routers/></Content>
        </Layout>
    </>
    )
}

export default App;
