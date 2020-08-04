import React from 'react';
import {Link} from 'react-router-dom'
import "./Navigation.css"

const Navigation = () => {
    return (
        <div className="nav">
            <button className="router-button"><Link to="/">Home</Link></button>
            <button className="router-button"><Link to="/about">About</Link></button>
        </div>
    );
};

export default Navigation;