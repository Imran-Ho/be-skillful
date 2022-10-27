import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideBar from '../LeftSideBar/LeftSideBar';

const Programs = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='5'>
                        <LeftSideBar></LeftSideBar>
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