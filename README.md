# Node.js-Email-Sender
This is a simple Node.js application that sends an email using Nodemailer. It includes an Express route that triggers the email sending process.

## Installation

To install the dependencies, run the following command:
npm install


## Configuration

Before running the application, you need to configure the SMTP server details and the email options. Open the `app.js` file and replace the following values:

- `your_smtp_host`: The hostname of your SMTP server.
- `your_smtp_port`: The port number of your SMTP server.
- `your_username`: The username used to authenticate with your SMTP server.
- `your_password`: The password used to authenticate with your SMTP server.
- `sender@example.com`: The email address of the sender.
- `recipient@example.com`: The email address of the recipient.

## Usage

To start the server, run the following command:
npm start

This will start the server on port 3000. To trigger the email sending process, send a GET request to `http://localhost:3000/sendemail`. If the email is sent successfully, the server will respond with a message indicating success. If an error occurs, the server will respond with a status code of 500.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Credits
This app was built by Anand Mathew :blush: as a learning exercise.
