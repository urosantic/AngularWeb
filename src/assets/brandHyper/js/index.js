// var functions = require('firebase-functions');
//
// const sendgrid = require('@sendgrid/mail')
//
// const client = sendgrid("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")
//
// function parseBody(body) {
//
//   sendgrid.setApiKey
//
//   var helper =  sendgrid.mail;
//   var fromEmail = new helper.Email(body.from);
//   var toEmail = new helper.
//
// }

// const sgMail = require('@sendgrid/mail');

function myTest() {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey('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');
  const msg = {
    to: 'urosantic@hotmail.com',
    from: 'urosantic@hotmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);

}

