import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../Others/Images/logo.png';
import { Image } from 'react-bootstrap';
import { AuthUser } from '../../Context/UserContext';
import { FaUserCircle } from "react-icons/fa";
import { MDBSwitch } from 'mdb-react-ui-kit';

const Header = ({ darkMode }) => {
    const { user, logOut } = useContext(AuthUser);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="">
                <Container>
                    <Image src={logo} style={{ height: '50px', width: '100px', marginInline: '20px' }} rounded></Image>
                    <Navbar.Brand href="/" style={{color: 'blue'}}>Be-Skillful</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features"></Nav.Link>
                            <Nav.Link href="#pricing"></Nav.Link>
                            <Link className='text-decoration-none m-3' to='/'>Home</Link>
                            <Link className='text-decoration-none m-3' to='/course'>Courses</Link>
                            <Link className='text-decoration-none m-3'>FAQ</Link>
                            <Link className='text-decoration-none m-3' to='/blog'>Blog</Link>
                        </Nav>

                        <Nav className='navItems'>
                        <div><MDBSwitch id='flexSwitchCheckDefault' onClick={darkMode} label='Light/Dark' /></div>
                            <div className='mx-2'>
                                {
                                    user?.uid ?
                                        <Link onClick={logOut}><button className='btn btn-dark'>Sign Out</button></Link>
                                        :
                                        <Link className='text-decoration-none m-3' to='/login'>Login</Link>
                                }
                            </div>
                            <div>
                                {
                                    user?.photoURL ?
                                        <>
                                            <Image
                                                className='mx-2'
                                                style={{ height: '30px', marginLeft: '20px' }}
                                                roundedCircle
                                                src={user.photoURL}
                                                title={user.displayName}
                                            ></Image>
                                        </>
                                        :
                                        <FaUserCircle></FaUserCircle>
                                }

                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;