var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kharoufwala24@gmail.com',
    pass: 'hjlhuwhirldyzdnf' 

  }
});

var mailOptions = {
  from: 'kharoufwala24@gmail.com',
  to: 'kharoufwala24@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});