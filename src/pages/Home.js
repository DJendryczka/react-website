import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/mbmain.jpg';
import '../styles/Home.css';
const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>Välkommen till</h1>
        <h1>MB Bilverkstad</h1>

        <Link to='/menu'></Link>
      </div>
    </div>
  );
};

export default Home;
