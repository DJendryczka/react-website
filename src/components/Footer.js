import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../styles/Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon />
        <FacebookIcon />
      </div>
      <p>&copy; 2022 Diagtech</p>
    </div>
  );
};

export default Footer;
