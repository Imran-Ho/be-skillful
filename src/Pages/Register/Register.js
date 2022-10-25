import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className='login-container'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name:</Form.Label>
                <Form.Control type="text" name='name' placeholder="Full name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Photo URL:</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email Name:</Form.Label>
                <Form.Control type="email" name='email' placeholder="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <div>
                <p>already have an account <Link to='/login'>Log in please.</Link></p>
            </div>
        </Form>
    </div>
    );
};

export default Register;