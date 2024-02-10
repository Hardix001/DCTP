import React from 'react';
import './index.css';

function RegistrationForm() {
    return (
        <div className='general-div'> 
        <div className="registration">
            <div className='img-divs'>
             <img src={process.env.PUBLIC_URL + '/frame 54.png'} alt="frame" />
             </div>
             
              <form action="../">
                <h2>SignUp</h2>
                <h4>Fill in the form to Register </h4>
                <div className="button-divs">
                    <button type="submit">Sign up with Google</button>
                </div>
                <h3>Or</h3>

                <div className="input-div">
                    <label htmlFor="name"> Full Name</label>
                    <input type="text" id="name" placeholder='Enter your name' />
                </div>
                <div className="input-div">
                    <label htmlFor="email"> Email Address</label>
                    <input type="email" id="email" placeholder='Enter your email address' />
                </div>
                <div className="input-div">
                    <label htmlFor="phone">Password</label>
                    <input type="tel" id="phone" placeholder='Enter your name' />
                </div>

                <div className="input-checkbox">
                    <input type="checkbox" id="termsConditions" />
                    <label htmlFor="termsConditions">I agree to the Terms and Conditions</label>
                </div>

                <div className="button-div">
                    <button type="submit"><a href='/'>Create Account</a></button>
                </div>

                <p>Already have an account? <a href="login.js">Sign In</a></p>
            </form>
        </div>

        <div className='images-div'>
        <img src={process.env.PUBLIC_URL + '/rectangle 555.png'} alt="frame" />

        </div>

       
        </div>
        

        
    );
}

export default RegistrationForm;
