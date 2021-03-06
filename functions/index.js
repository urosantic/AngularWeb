const functions = require('firebase-functions');

  const admin = require('firebase-admin');
  const nodemailer = require('nodemailer');
  const cors = require('cors')({origin: true});


  admin.initializeApp();

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: functions.config().gmail.email,
        pass: functions.config().gmail.password
      }
    });

    exports.sendEmail = functions.https.onRequest((req, res) => {
      cors(req, res, () => {

        const message = req.query.message;
        const name = req.query.name;
        const email = req.query.email;

        const mailOptions = {
          from: email,
          to: ' <marzo.cs@gmail.com>',
          subject: 'MarzoID Website Contact Form',
          html: 'From: ' + email + '  Name of the sender: '+ name + " Message: " + message
             // email content in HTML
        };
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
          if (erro) {
            return res.send(erro.toString());
          }
          return res.send({headers: this.headers,responseType:'text'});
        });
      });
    });
