import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import jsPDF from 'jspdf';
import logo from '../../Others/Images/logo.png'
import { FaFileDownload, IconName } from "react-icons/fa";

const Courses = () => {
    const courses = useLoaderData()
    const {subject_id, title, details, image } = courses;
    // console.log(subject_id)

// pdf section
    const pdfGenerate = () =>{
        const doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.text(100,60,'This is an online Learning platform')
        doc.text(100,80,'Each and every one can get his onw desired course from here')
        doc.text(100,100,'If needed please visit to our web site @ https://be-skillful.web.app/')
        doc.addPage()
        doc.addImage(logo, 'PNG', 60,20,500,400)
        
        doc.save('a.pdf')
    }
    return (
        <div>
            <Container>
            <Row>
                <Col lg='5' className='mt-5'>
                    <LeftSideBar></LeftSideBar>
                </Col>
                <Col lg='7' className='mt-5'>
            	  <Card>
                <Card.Header className='d-flex justify-content-between'>
                    <div>{title}</div>
                    <button  onClick={pdfGenerate}><FaFileDownload className='w-20'></FaFileDownload></button>
                </Card.Header>
                <Card.Body>
                <Card.Img variant="top" src={image} />
                    <Card.Title></Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/checkout/${subject_id}`}>
                    <Button variant="primary">Get premium access</Button>
                    </Link>
                </Card.Body>
            </Card>
                </Col>
            </Row>
        </Container>
        
          
        </div>
    );
};

export default Courses;