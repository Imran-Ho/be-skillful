import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import Home from '../Pages/LeftSideBar/LeftSideBar';

const Main = () => {
    const [theme, setTheme] = useState("light-theme");
    
    const darkMode = () =>{
        if(theme == "dark-theme"){
            setTheme("light-theme");
        }
        else{
            setTheme("dark-theme");
        }
    }

    useEffect(() =>{
        document.body.className = theme;
    },[theme])
    return (
        <div>
            <Header darkMode={darkMode}></Header>
            
            <Container>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default Main;