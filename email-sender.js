// email-sender.js
const nodemailer = require("nodemailer");

// Setup transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "motunmarteen@gmail.com",
    pass: "Adeleke123!@",
  },
});

// Email options
let mailOptions = {
  from: "motunmarteen@gmail.com",
  to: "alwaysmotun@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Hello from Node.js!",
};

// Send email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("Error occurred:", err);
  } else {
    console.log("Email sent:", info.response);
  }
});
