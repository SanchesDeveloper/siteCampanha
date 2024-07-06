const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sanchespaulo55@gmail.com',
    pass: 'Meg@deth1999',
  },
});

app.post('/send', (req, res) => {
  const { name, phone, email, address, question } = req.body;
  const mailOptions = {
    from: email,
    to: 'paulo0500@hotmail.com',
    subject: 'FAQ Submission',
    text: `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Address: ${address}
      Question: ${question}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
