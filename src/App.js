import React, { Component } from 'react';
import './App.css';
import { Layout, Content } from 'react-mdl';
import Routers from './components/router';
import CustomHeader from './components/Header';
import CustomFooter from './components/Footer';

class App extends Component {
    render() {
        return (
            <>
                <Layout>
                    <CustomHeader />
                    
                    {/* <CustomFooter/> */}
                </Layout>
            </>
        );
    }
}

export default App;
