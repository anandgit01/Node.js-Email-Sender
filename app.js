// Import dependencies
const express = require('express');
const nodemailer = require('nodemailer');

// Create an Express application
const app = express();
const port = 3000;

// Define a route for sending emails
app.get('/sendemail', async (req, res) => {
  try {
    // Configure the SMTP server details (replace with actual values)
    const smtpConfig = {
      host: 'your-smtp-host',
      port: 587,
      secure: false, // SSL disabled
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
      },
      tls: {
        rejectUnauthorized: false
      }
    };

    // Create a Nodemailer transporter using the SMTP configuration
    const transporter = nodemailer.createTransport(smtpConfig);

    // Define the email options
    const mailOptions = {
      from: 'sender@example.com',
      to: 'recipient@example.com',
      subject: 'Test Email',
      text: 'This is a test email sent from Node.js and Nodemailer.',
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.messageId);
    res.send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('An error occurred while sending the email');
  }
});

// Start the server
app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
