/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo} />
      </div>
      <div className='rightSide'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/abbout'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
