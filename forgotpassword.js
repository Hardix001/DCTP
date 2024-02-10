import React from "react";
import './index.css';

function forgotpassword() {
    return (
        <div className='general-div'> 
        <div className="registration">
            <div className='img-divs'>
             <img src={process.env.PUBLIC_URL + '/frame 54.png'} alt="frame" />
             </div>
             
              <form action="../">
                <h2>Forgot Passwordk</h2>
                <h4>Enter new password </h4>


                <div className="input-div">
                    <label htmlFor="email"> Email Address</label>
                    <input type="email" id="email" placeholder='Enter your email address' />
                </div>
                <div className="input-div">
                    <label htmlFor="phone"> Confirm Password</label>
                    <input type="tel" id="phone" placeholder='Enter your password' />
                </div>


                <div className="button-div">
                    <button type="submit">Reset Password</button>
                </div>

               
            </form>
        </div>

        <div className='images-div'>
        <img src={process.env.PUBLIC_URL + '/rectangle 555(1).png'} alt="frame" />

        </div>

       
        </div>
        

        
    );
}

export default forgotpassword;
