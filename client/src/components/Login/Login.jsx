import React, { useState } from "react";
import './Login.scss';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className="container">
            <div className="header">
                <div className="text"> {action} </div>
                <div className="underline"> </div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <img src="img/person.png" alt="" />
                    <input type="text" placeholder="Name" />
                </div>}

                <div className="input">
                    <img src="img/email.png" alt="" />
                    <input type="email" placeholder="Email ID" />
                </div>
                <div className="input">
                    <img src="img/password.png" alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgot-password">
                Lost Password? <span>Click here!</span>
            </div>}

            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignup;
