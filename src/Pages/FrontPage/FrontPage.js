import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import frontImage from '../../Others/Images/frontImage.jfif'
const FrontPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='' lg='6'>
                        <h5 className='m-5'>Introduction to Networking Technology</h5>
                        <p className='m-3 '>The journey to solid expertise in network architecture starts by understanding the fundamental framework at the heart of computer network design. This computer organization course covers the basics of computer networks, with an emphasis on network infrastructure and protocols. Learn the process of organizing and configuring various components to implement a network as well as the critical functions of computer networks.</p>
                    </Col>
                    <Col lg='6'>
                        <img className='m-5'height={300} src={frontImage} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FrontPage;