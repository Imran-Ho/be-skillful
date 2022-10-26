import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = () => {
    const subject = useLoaderData()
    const {subject_id,title,image,details} = subject;

    console.log(subject_id)
    return (
        <div>
            <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                <Card.Img style={{height:'300px'}} variant="top" src={image} />
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/checkout/${subject_id}`}>
                        <Button variant="primary">Get Premium Access</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;