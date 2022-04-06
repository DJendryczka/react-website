/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navar'>
      <div className='leftside'>
        <img src={Logo} />
      </div>
      <div className='rightside'>
          <Link to='/'>Home</Link>
      </div>
    </div>
  );
};

export default Navbar;
