import React from 'react';
import logo from '../../assets/images/artsy_logo.png';  // Import your image
import { NavLink } from 'react-router-dom';

const LogoButton = () => {
    return (
        <>
        <NavLink to={"/"} className="logo-button">
            <img src={logo} alt="Artsy logo" className="logo-image"/>
        </NavLink>
        </>
    )
}

export default LogoButton
