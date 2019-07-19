function myTest() {
  alert("mytestcalled within a function");
  //
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // const msg = {
  //   to: 'urosantic@hotmail.com',
  //   from: 'urosantic@hotmail.com',
  //   subject: 'Sending with Twilio SendGrid is Fun',
  //   text: 'and easy to do anywhere, even with Node.js',
  //   // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  // };
  // sgMail.send(msg);
  //
  // alert('email sent');

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'urosantic@hotmail.com',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);

  // var helper = require('@sendgrid/mail').mail;
  // var fromEmail = new helper.Email('urosantic@hotmail.com');
  // var toEmail = new helper.Email('urosantic@hotmail.com');
  // var subject = 'Sending with SendGrid is Fun';
  // var content = new helper.Content('text/plain', 'and easy to do anywhere, even with Node.js');
  // var mail = new helper.Mail(fromEmail, subject, toEmail, content);
  //
  // var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  // var request = sg.emptyRequest({
  //   method: 'POST',
  //   path: '/v3/mail/send',
  //   body: mail.toJSON()
  // });
  //
  // sg.API(request, function (error, response) {
  //   if (error) {
  //     console.log('Error response received');
  //   }
  //   console.log(response.statusCode);
  //   console.log(response.body);
  //   console.log(response.headers);
  // });
  alert("email sentttttt");
}
