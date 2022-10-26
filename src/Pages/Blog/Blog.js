import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>blog</h3>
            <h5>What is CORS?</h5>
            <br />
            <h6>
            CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
            </h6>
            <br />
            <h5>Why are you using Firebase? What other options do you have to implement authentication?</h5>
            <br />
            <h6>
            Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic.
            </h6>
            <h6>Some options to implement authentication are given below</h6>
            <li>Password-based authentication. Passwords are the most common methods of authentication.</li>
            <li>Multi-factor authentication.</li>
            <li>Certificate-based authentication.</li>
            <li>Biometric authentication.</li>
            <li>Token-based authentication.</li>
            <br />
            <h5>How does the private route work?</h5>
            <br />
            <h6>
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in.
            </h6>
            <br />
            <h5>What is Node? How does Node work?</h5>
            <br />
            <h6>
            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend.
            </h6>
        </div>
    );
};

export default Blog;