import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

const Programs = () => {
    return (
        <div>
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

export default Programs;