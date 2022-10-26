import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {
    const courses = useLoaderData()
    const {subject_id, title, details, image } = courses;
    // console.log(subject_id)
    return (
        <div>
        
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
        </div>
    );
};

export default Courses;