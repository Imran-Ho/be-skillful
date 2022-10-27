import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthUser } from '../../Context/UserContext';
import './Login.css';

const Login = () => {
    const {googleSignIn, githubSignIn, loginWithEmailPassword} = useContext(AuthUser)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';

// login with email and password
    const useEmailAndPassword = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        loginWithEmailPassword(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error => {
            setError(error.message)
        })


    }
// login with google
    const googleClick = () =>{
        googleSignIn(googleProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(error =>{
            setError(error.message)
        })
    }
// login with github
    const githubClick = () =>{
        githubSignIn(githubProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    return (
        <div>
            <div className='login-container'>
            <Form onSubmit={useEmailAndPassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                    <Form.Text className="text-warning m-3">
                        {error}
                    </Form.Text>
                <div>
                    <p>don't have an account? <Link to='/register'>create an account.</Link></p>
                </div>
                <div className='text-center'>
                    <p>Alternative</p>
                    <hr />
                    <Link onClick={googleClick}><button className='btn btn-dark mb-2 lg:w-50'>Sign in with Google </button></Link>
                    <br />
                    <Link onClick={githubClick}><button className='btn btn-light lg:w-50'>Sign in with GitHub </button></Link>
                </div>
            </Form>
        </div>
        </div>
    );
};

export default Login;