/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import Logo from '../assets/autospecialisten.jpg';
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import '../styles/Navbar.css';
const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }
  return (
    <div className='navbar'>
      <div className='leftSide' id={ openLinks ? 'open' : 'close'}>
        <img src={Logo} />
        <div className='hiddenLinks'>
          <Link to='/'>Hem</Link>
          <Link to='/menu'>Våra tjänster</Link>
          <Link to='/abbout'>Om oss</Link>
          <Link to='/contact'>Kontakt</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to='/'>Hem</Link>
        <Link to='/menu'>Våra tjänster</Link>
        <Link to='/abbout'>Om oss</Link>
        <Link to='/contact'>Kontakt</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
