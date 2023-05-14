import React, { useContext, useEffect } from 'react';
import { LoginContext, LoginProvider } from './LoginContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { mobileNumber, otp, error, handleMobileNumberChange, handleOTPChange, handleLogin } = useContext(LoginContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(handleSuccessfulLogin());
    };

    const handleSuccessfulLogin = () => {
        navigate('/blogpost'); // Redirect to BlogPost page after successful login
    };

    return (
        <div>
            <LoginProvider >
                <h2>Login</h2>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <input
                        type="text"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={handleMobileNumberChange}
                    />
                    <label htmlFor="otp">OTP:</label>
                    <input type="text" id="otp" value={otp} onChange={handleOTPChange} />
                    <button type="submit">Login</button>
                </form>
            </LoginProvider>
        </div >
    );
};

export default Login;
