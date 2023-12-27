// MainContent.js

import React from 'react';
import "./MainContent.css";

function MainContent() {
  return (
    <div className="main-container">
      <div className='container'>
        
          <div className="tvimage">
            <img src="/portfolio/images/oldtv.png" alt="tv" width="840px"  />
          </div>
          <div className="animationimage">
            <img src="/portfolio/images/Animation_AdobeExpress.gif" alt="ani" height="465px" />
          </div>
          {/* Add content similar to the ContactPage form here if needed */}
        </div>
      </div>
   
  );
}

export default MainContent;
