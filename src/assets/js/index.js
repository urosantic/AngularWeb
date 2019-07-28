function mailFunction() {

  alert("testtest");
  var nodemailer = require('nodemailer');


  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'urosantic8@gmail.com',
      pass: 'urosantic18091993'
    }
  });

  var mailOptions = {
    from: 'urosantic@hotmail.com',
    to: 'urosantic@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}
