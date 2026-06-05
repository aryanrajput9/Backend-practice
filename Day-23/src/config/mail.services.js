const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAILPASSWORD
    }
});

let sendEmails = async (to, subject, text) => {
    let option = {
        from: process.env.GMAIL_ID,
        to,
        subject,
        text
    }

    await transporter.sendMail(option)
};

module.exports = sendEmails