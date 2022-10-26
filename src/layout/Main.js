import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import Home from '../Pages/Home/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>
            
            <Container>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default Main;