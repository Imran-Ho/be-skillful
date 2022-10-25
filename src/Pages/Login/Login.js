import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthUser } from '../../Context/UserContext';
import './Login.css';

const Login = () => {
    const {googleSignIn} = useContext(AuthUser)
    const googleProvider = new GoogleAuthProvider()

// login with google
    const googleClick = () =>{
        googleSignIn(googleProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className='login-container'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <div>
                    <p>don't have an account? <Link to='/register'>create an account.</Link></p>
                </div>
                <div className='text-center'>
                    <p>Alternative</p>
                    <hr />
                    <Link onClick={googleClick}><button className='btn btn-dark mb-2 w-50'>Sign in with Google </button></Link>
                    <br />
                    <Link><button className='btn btn-light w-50'>Sign in with GitHub </button></Link>
                </div>
            </Form>
        </div>
    );
};

export default Login;