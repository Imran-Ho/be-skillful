import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Details = ({course}) => {
    const {name, id} = course;
    return (
        <div className='mt-2'>
            <Link to={`/courses/${id}`}>
                <Card style={{ width: '18rem', textDecoration: 'none' }}>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default Details;