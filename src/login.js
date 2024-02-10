import React from "react";
import './index.css';

function Login() {
    return (
        <div className='general-div'> 
        <div className="registration">
            <div className='img-divs'>
             <img src={process.env.PUBLIC_URL + '/frame 54.png'} alt="frame" />
             </div>
             
              <form action="../">
                <h2>Welcome back</h2>
                <h4>Login to your account </h4>
                <div className="button-divs">
                    <button type="submit">Sign up with Google</button>
                </div>
                <h3>Or</h3>


                <div className="input-div">
                    <label htmlFor="email"> Email Address</label>
                    <input type="email" id="email" placeholder='Enter your email address' />
                </div>
                <div className="input-div">
                    <label htmlFor="phone">Password</label>
                    <input type="tel" id="phone" placeholder='Enter your name' />
                </div>


                <div className="button-div">
                    <button type="submit">Sign In</button>
                </div>

                <p>New Member? <a href="/">Sign Up</a></p>
            </form>
        </div>

        <div className='images-div'>
        <img src={process.env.PUBLIC_URL + '/rectangle 555(1).png'} alt="rectangle" />

        </div>

       
        </div>
        

        
    );
}

export default Login;
