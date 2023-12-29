import React from 'react';
import './ProjectPage.css';

function CardContainer() {
  const cardData = [
    {
      image: 'oldtv.png',
      animation: 'searchformusic.png',
      link: 'https://psychicseizures.github.io/searchformusic/',
      description: 'A little app I made for fun and to learn. I made it based on instructions from the "Cooper Codes" channel on Youtube. It will give you all the albums a band has made if you type in a name, by calling up the Spotify API. I later added some features to it, and I learned a lot from this project',
    },
    {
      image: 'oldtv.png',
      animation: 'binarybrewers.png',
      link: 'https://binarybrewers-2k9qs1lcx-yassine-kazdaghli.vercel.app/',
      description: 'Final project from DCI. I made it together with fellow students Riccardo Vitale and Yassine Kazdaghli. The websites hosts our very own podcast "Binary Brewers Podcast".',
    },
    {
      image: 'oldtv.png',
      animation: 'pause.png',
      link: '',
      description: '',
    },
    {
      image: 'oldtv.png',
      animation: 'pause.png',
      link: '',
      description: '',
    },
    {
      image: 'oldtv.png',
      animation: 'pause.png',
      link: '',
      description: '',
    },
    {
      image: 'oldtv.png',
      animation: 'pause.png',
      link: '',
      description: '',
    },
    // Add similar objects for each card
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div className="container" key={index}>
          <div className="image-container">
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              <img src={`/portfolio/images/${card.image}`} alt="Avatar" className="tv-image" />
            </a>
          </div>
          <div className="animation-container">
            <img src={`/portfolio/images/${card.animation}`} alt="ani" className="animation-image" />
          </div>

          <div className="description-container">
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardContainer;

