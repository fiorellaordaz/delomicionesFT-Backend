const sgMail = require("@sendgrid/mail");
// const config = require("../config");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = sgMail;
