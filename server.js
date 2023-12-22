require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const formData = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Replace with the destination email address
    subject: 'New Form Submission',
    html: `
      <p>Name: ${formData.name}</p>
      <p>Email: ${formData.email}</p>
      <p>Subject: ${formData.subject}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
    res.send('Form submitted successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
