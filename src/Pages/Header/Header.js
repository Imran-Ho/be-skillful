import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../Others/Images/logo.png';
import { Image } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Image src={logo} style={{height: '50px', marginInline: '20px'}} rounded></Image>
                    <Navbar.Brand href="#home">Be-Skillful</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features"></Nav.Link>
                            <Nav.Link href="#pricing"></Nav.Link>
                            
                        </Nav>
                        <Nav className='navItems'>
                            <Link className='text-decoration-none m-3' to='/programs'>Programs</Link>
                            <Link className='text-decoration-none m-3'>FAQ</Link>
                            <Link className='text-decoration-none m-3' to='/blog'>Blog</Link>
                            <Link className='text-decoration-none m-3' to='/login'>Login</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;