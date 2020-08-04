import React from 'react';
import Logo from '../logo.svg'
import './LoadingPage.css';

const LoadingPage = () => {
    return (
        <div>
            <img src={Logo}></img>
            <h1>Loading...</h1>
        </div>
    );
};

export default LoadingPage;