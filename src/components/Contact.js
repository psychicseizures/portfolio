import React, { useState } from 'react';
import './Contact.css'; // Make sure to create and import the appropriate CSS file

function ContactPage() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    subject: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Add any client-side logic here after successful form submission
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className='main-container'>
      <div className='container'>
        <div className="tv">
          <img src="../images/oldtv.png" alt="tv" width="840px" />
        </div>
        <div className="animation">
          <img src="../images/pause.png" alt="ani" height="465px" />
        </div>
        <div className="card">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="fname">Name</label>
              <input type="text" id="fname" name="name" placeholder="Your name.." onChange={handleChange} />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your e-post address.." onChange={handleChange} />

              <label htmlFor="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '80px' }} onChange={handleChange}></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
      </div>
    
  );
}

export default ContactPage;
