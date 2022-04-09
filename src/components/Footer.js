import React from 'react';

import '../styles/Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='footerInfo'>
          <p>E-mail: bokning.mbbilverkstad@telia.com</p>
          <p>Tel Växel 040 291610</p>
          <p>Våra öppetider är:</p>
          <p>Måndag - Torsdag 08.00 - 17.00</p>
          <p>Fredag 08.00 - 16.00</p>
          
        </div>
        <div className='footerInfo'>
          <p>Besöksadress</p>
          <p>MB BilverkstadLundavägen 62212 25 Malmö</p>
          <p>Post adress</p>
          <p>MB BilverkstadBox 210 79200 21 Malmö</p>
          <p> &copy; MB Bilverkstad</p>
        </div>
      
        
    </div>
  );
};

export default Footer;
