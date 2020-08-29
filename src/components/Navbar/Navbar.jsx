import React from 'react';

import DogLogo from '../assets/images/dog-logo.png'
import BreedsSelect from './BreedsSelect/BreedsSelect'

import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="wrapper">
                <div className="nav-grid">
                    <div className="logo">
                        <img src={DogLogo} alt="dog-logo"/>
                        <h1>WikiWuf</h1>
                    </div>
                    <div className="breed-select">
                        <BreedsSelect />
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;