import React from 'react';
import './ProjectPage.css';

function CardContainer() {
  const cardData = [
    { image: 'oldtv.png', animation: 'searchformusic.png', link: 'project1-link' },
    { image: 'oldtv.png', animation: 'binarybrewers.png', link: 'https://binarybrewers-2k9qs1lcx-yassine-kazdaghli.vercel.app/' },
    { image: 'oldtv.png', animation: 'pause.png', link: 'project3-link' },
    { image: 'oldtv.png', animation: 'pause.png', link: 'project4-link' },
    { image: 'oldtv.png', animation: 'pause.png', link: 'project5-link' },
    { image: 'oldtv.png', animation: 'pause.png', link: 'project6-link' },
    // Add similar objects for each card
  ];

  return (
    
    <div className="card-container">
      {cardData.map((card, index) => (
        <div className="container" key={index}>
          <div className="image-container">
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              <img src={`/images/${card.image}`} alt="Avatar" className="tv-image" />
            </a>
          </div>
          <div className="animation-container">
            <img src={`/images/${card.animation}`} alt="ani" className="animation-image" />
          </div>
        </div>
      ))}
    </div>
    
  );
}

export default CardContainer;
