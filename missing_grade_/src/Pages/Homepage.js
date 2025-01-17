// Homepage.js

import React from 'react';
import Navbar from './component/Navbar';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Footer from './component/footer';


const Homepage = () => {
  return (
    <div className='overview'>
      <Navbar />
      <div className='tab'>
        <div className='text'>
          <h1>Missing Grade Reporting System</h1>
          <div>
            <h2>Welcome to our Missing Grade Reporting System</h2>
            <p>
              This system allows you to report missing grades for your courses. If you have encountered any issues with
              grades being inaccurately recorded or missing, you can use our system to report the problem.
            </p>

            <p>
              Simply fill out the Missing Grade Form, providing details such as the course name, instructor name,
              expected grade, and an explanation. Your report will be submitted for further review.
            </p>
          </div>
          <div className='features'>
            <h2>Key Features</h2>
            <ul>
              <li>User-friendly interface for reporting missing grades</li>
              <li>Secure login for access to personalized dashboards</li>
              <li>Real-time updates on the status of your grade reports</li>
              <li>Contact us for assistance or support</li>
            </ul>
          </div>
          <div className='login-container'>
            <button className='login'>
              <Link to="./Login">Login</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Homepage;
