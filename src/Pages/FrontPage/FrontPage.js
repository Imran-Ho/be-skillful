import React from 'react';
import './FrontPage.css'
import frontImage from '../../Others/Images/frontImage.jfif'
import { Link } from 'react-router-dom';
const FrontPage = () => {
    return (
        <div className='front-page'>
            <div>
                <h3 className='course-name'>Introduction to Networking Technology</h3>
                <hr />
                <p className='m-3 '>The journey to solid expertise in network architecture starts by understanding the fundamental framework at the heart of computer network design. This computer organization course covers the basics of computer networks, with an emphasis on network infrastructure and protocols. Learn the process of organizing and configuring various components to implement a network as well as the critical functions of computer networks.<Link to='/course'>All Courses Here</Link></p>
            </div>
            <div>
                <img className='front-img' src={frontImage} alt="" />
            </div>
            
        </div>
    );
};

export default FrontPage;