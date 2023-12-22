import React from 'react';
import './Resume.css';

const ResumePage = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="left">
          <div className="image-container">
            <img src="/images/oldtv.png" alt="TV" className="tvImage" width="430px"/>
            <div className="resumeImage">
              <img src="/images/resumeimage.jpg" alt="Resume" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
        <div className="right">
          <h2 className="subtitle">Mads Skou Karstens Jorgensen</h2>
          <p>
          Hello I am Mads.

I am a musician, painter and web developer.

I love alternative/independent music and I like low/high-brow art of many different descriptions.

I have just finished a one year full-time web development course at DCI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;