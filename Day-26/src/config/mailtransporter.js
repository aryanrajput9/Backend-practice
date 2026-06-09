const nodemailer = require('nodemailer');


const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
});

const sendEmail = async (to, subject, html) => {
    const option = {
        from: process.env.NODEMAILER_USER,
        to,
        subject,
        html
    };

    await mailTransporter.sendMail(option)
};

module.exports = sendEmail