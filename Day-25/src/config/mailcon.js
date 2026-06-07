const nodemailer = require('nodemailer');

const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_GMAIL,
        pass: process.env.NODEMAILER_PASS
    }
});

const sendEmail = async (to, subject, html) => {
    try {
        const option = {
            from: process.env.NODEMAILER_GMAIL,
            to,
            subject,
            html
        };

        return await mailTransporter.sendMail(option)
    } catch (error) {
        console.log("error in mailsender", error)
    }
};

module.exports = sendEmail