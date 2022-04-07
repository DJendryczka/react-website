/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
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
        <button>
            <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
