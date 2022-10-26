import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import Home from '../Home/Home';

const Courses = () => {
    const courses = useLoaderData()
    const {subject_id, title, details, image } = courses;
    // console.log(subject_id)
    return (
        <div>
            <Container>
            <Row>
                <Col lg='5'>
                    <Home></Home>
                </Col>
                <Col lg='7'>
            	  <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                <Card.Img variant="top" src={image} />
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/checkout/${subject_id}`}>
                    <Button variant="primary">Get premium access</Button>
                    </Link>
                </Card.Body>
            </Card>
                </Col>
            </Row>
        </Container>
        
          
        </div>
    );
};

export default Courses;