import React, { createContext, useState } from 'react';
import data from './data.json';

export const LoginContext = createContext();

export const LoginProvider = ({ children, handleSuccessfulLogin }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handleOTPChange = (e) => {
        setOtp(e.target.value);
    };


    const handleLogin = async (handleSuccessfulLogin) => {
        try {
            const user = data?.users?.find(
                (user) => user?.mobileNumber === mobileNumber && user?.otp === otp
            );

            if (user) {
                // Handle successful login
                handleSuccessfulLogin()
                console.log('Login successful!');
            } else {
                setError('Invalid mobile number or OTP');
            }
        } catch (error) {
            setError('An error occurred while logging in');
        }
    };

    const loginContextValue = {
        mobileNumber,
        otp,
        error,
        handleMobileNumberChange,
        handleOTPChange,
        handleLogin,
    };

    return (
        <LoginContext.Provider value={loginContextValue}>
            {children}
        </LoginContext.Provider>
    );
};
