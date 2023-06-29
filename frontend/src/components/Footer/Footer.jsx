import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import {BsLinkedin, BsGithub } from "react-icons/bs"

const Footer = () => {
    return (
        <footer className='site-footer'>
        <div className='footer-content'>
            <div className='footer-links'>
            <h3 className='footer-column'>Explore</h3>
            <ul>
                <li><Link to='/'>Product Index</Link></li>
                <li><Link to='/products/1'>Product Show Page</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
            </ul>
            </div>
            <div className='social-links'>
            <h3 className='footer-column'>Connect</h3>
            <ul>
                <li><a href='https://github.com/LetsGitFunky/'><BsGithub size={30}/></a></li>
                {/* <li><a href='https://twitter.com/yourusername'>Twitter</a></li> */}
                <li><a href='https://www.linkedin.com/in/nickjhein/'><BsLinkedin size={30}/></a></li>
            </ul>
            </div>
            <div className='wiki-links'>
            <h3 className='footer-column'>Documentation</h3>
            <ul>
                <li><a href='https://github.com/LetsGitFunky/Artsy/wiki'>Wiki</a></li>
                <li><a href='https://github.com/LetsGitFunky/Artsy/wiki/Backend-Routes'>Backend Routes</a></li>
                <li><a href='https://github.com/LetsGitFunky/Artsy/wiki/Frontend-Routes'>Frontend Routes</a></li>
            </ul>
            </div>
        </div>
        <div className='footer-credit'>
            <p className='footer-credit-text'>© {new Date().getFullYear()} Nick Hein</p>
        </div>
        </footer>
    );
}

export default Footer;
