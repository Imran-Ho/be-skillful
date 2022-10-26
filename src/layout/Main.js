import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import Home from '../Pages/Home/Home';
import Programs from '../Pages/Programs/Programs';

const Main = () => {
    return (
        <div>
            <Header></Header>
            
            <Container>
                <Row>
                    <Col lg='5'>
                    <Home></Home>
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;