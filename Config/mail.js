const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'yesenia.oconner@ethereal.email',
    pass: '1nyZjz49ayvXQ3JQ5f'
  }
});



module.exports = transporter
