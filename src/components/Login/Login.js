import React from 'react';
import  './Login.css';

const Login = (props) => {
    return(
      <div className="body1">
      <div className="container">
    <input type="checkbox" id="flip"/>
    <div className="cover">
      <div className="front">
        <img src="https://i.pinimg.com/564x/b9/08/d7/b908d7fa035d449a72342b03affa1d07.jpg" alt=""/>
        <div className="text">
          <span className="text-1">Every new friend is a new adventure</span>
          <span className="text-2">Let's get connected</span>
        </div>
      </div>
      <div className="back">
        <img className="backImg" src="images/backImg.jpg" alt=""/>
        <div className="text">
          <span className="text-1">Complete miles of journey  with one step</span>
          <span className="text-2">Let's get started</span>
        </div>
      </div>
    </div>
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
          <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              <div className="text"><a href="#">Forgot password?</a></div>
              <div className="button input-box">
                <input type="submit" value="Sumbit"/>
              </div>
              <div className="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div>
            </div>
        </form>
      </div>
        <div className="signup-form">
          <div className="title">Signup</div>
        <form>
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your name" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              <div className="button input-box">
                <input type="submit" value="Sumbit"/>
              </div>
              <div className="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
            </div>
      </form>
    </div>
    </div>
    </div>
  </div>
  </div>);
}

export default Login;