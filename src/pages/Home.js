import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css';
const Home = () => {
  return (
    <div className='home'>
      <div
        className='headerContainer'
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <h1>MB Bilverkstad</h1>
        <p>Malmös äldsta Bilverkstad</p>
        <Link to='/menu'>
          <button>Boka service här</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
