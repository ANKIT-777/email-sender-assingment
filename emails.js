const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'djay73647@gmail.com', 
    pass: 'FizebM8RrZXN8VG' 
  }
});


const mailOptions = {
  from: 'an2ki4t5sl@gmail.com',
  to: 'test@gmail.com', 
  subject: 'Hello from anki',
  text: 'This is a testing email , just to say jai shree ram.'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
