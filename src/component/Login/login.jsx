

import React from 'react';
import './login.css';
import log from '../../asset/login.jpg'
import { FaArrowLeft } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="login-container">
      <a href="/" className="back-link">  <FaArrowLeft /></a>
      <div className="illustration">
      <img src={log} alt="" height={600} width={500} />
      </div>

      <div className="login-form">
        <h1>Login</h1>
        <input type="text" placeholder="email" className="input-field" />
        <input type="password" placeholder="password" className="input-field" />
        <button className="login-button">Log in</button>
        <a href="#">Register</a>
      </div>
     
    </div>
  );
};

export default Login;
