import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../Others/Images/logo.png';
import { Image } from 'react-bootstrap';
import { AuthUser } from '../../Context/UserContext';
import { FaUserCircle} from "react-icons/fa";
import { MDBSwitch } from 'mdb-react-ui-kit';

const Header = ({darkMode}) => {
    const { user, logOut } = useContext(AuthUser);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="">
                <Container>
                    <Image src={logo} style={{ height: '50px', width: '100px', marginInline: '20px'}} rounded></Image>
                    <Navbar.Brand  href="/">Be-Skillful</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features"></Nav.Link>
                            <Nav.Link href="#pricing"></Nav.Link>
                            <Link className='text-decoration-none m-3' to='/'>Home</Link>
                            <Link className='text-decoration-none m-3' to='/programs'>Programs</Link>
                            <Link className='text-decoration-none m-3'>FAQ</Link>
                            <Link className='text-decoration-none m-3' to='/blog'>Blog</Link>
                            <Link className='text-decoration-none m-3'><div><MDBSwitch id='flexSwitchCheckDefault' onClick={darkMode} label='Dark/Light' /></div></Link>
                            
                                                  

                        </Nav>
                        
                        <Nav className='navItems'>
                            {
                                user?.uid ?
                                    <Link onClick={logOut}><button className='btn btn-dark'>Sign Out</button></Link>
                                    :
                                    <Link className='text-decoration-none m-3' to='/login'>Login</Link>
                            }
                            {
                                user?.photoURL ?
                                    <>
                                        <Image
                                            className=''
                                            style={{ height: '30px', marginLeft: '20px' }}
                                            roundedCircle
                                            src={user.photoURL}
                                            title={user.displayName}
                                        ></Image>
                                    </>
                                    :
                                    <FaUserCircle></FaUserCircle>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;