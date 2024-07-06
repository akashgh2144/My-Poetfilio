
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';




const Main = () => {
    return (
        <>
            <NavBar />
            
          
          
            
            <Outlet />
            
            
            <Footer />
        </>
    );
};

export default Main;
