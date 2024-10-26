

import React from 'react';
import './register.css';
import reg from '../../asset/login.jpg'
import { FaArrowLeft } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="login-container">
      <a href="/" className="back-link">  <FaArrowLeft /></a>
      <div className="illustration">
      <img src={reg} alt="" height={600} width={500} />
      </div>

      <div className="login-form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="First Name" className="input-field" />
    <input type="text" placeholder="Last Name" className="input-field" />
        <input type="text" placeholder="email" className="input-field" />
        <input type="password" placeholder="password" className="input-field" />
        <button className="signup-button">Sign Up</button>
        <p>Have an account? <a href="#">Login</a></p>
      </div>
     
    </div>
  );
};

export default Login;
