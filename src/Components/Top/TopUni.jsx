import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TopUni.css';

const games = [
  {
    title: 'Warframe',
    image: 'http://localhost:8000/media/media/universities/Seoul_National_University_SNU.jpg',
  },
  {
    title: 'PUBG',
    image: 'http://localhost:8000/media/media/universities/Seoul_National_University_SNU.jpg',
  },
  {
    title: 'Apex Legends',
    image: 'http://localhost:8000/media/media/universities/Seoul_National_University_SNU.jpg',
  },
  {
    title: 'The Sims 4',
    image: 'http://localhost:8000/media/media/universities/Seoul_National_University_SNU.jpg',
  },
  {
    title: 'Lost Ark',
    image: 'http://localhost:8000/media/media/universities/Seoul_National_University_SNU.jpg',
  },
  {
    title: 'Destiny 2',
    image: 'http://localhost:8000/media/media/universities/Seoul_National_University_SNU.jpg',
  }
];

const TopUni = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="game-section">
      <div className="game-header">
        <div>
          <p className="top-text">TOP GAMES</p>
          <h2>Most Played</h2>
        </div>
        <button className="view-all">VIEW ALL</button>
      </div>

      <div className="game-cards">
        {games.map((game, index) => (
          <div className="game-card" data-aos="zoom-in" key={index}>
            <img src={game.image} alt={game.title} />
            <p className="genre">Adventure</p>
            <h4>{game.title}</h4>
            <button className={`explore-btn ${index === 3 ? 'blue' : ''}`}>
              EXPLORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopUni;