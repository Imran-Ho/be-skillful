import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthUser } from '../../Context/UserContext';


const Register = () => {
    const {createNewUser} = useContext(AuthUser)

    const newUserCreate = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL,email,password)
        createNewUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset()
        })
        .catch(error => {console.error(error)})


    }
    return (
        <div className='login-container'>
        <Form onSubmit={newUserCreate}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name:</Form.Label>
                <Form.Control type="text" name='name' placeholder="Full name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo URL:</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Name:</Form.Label>
                <Form.Control type="email" name='email' placeholder="email"  required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
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