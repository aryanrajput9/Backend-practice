const nodemailer = require('nodemailer');

const mailtransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS
    }
});

const sendEmail = async (to, subject, html) => {
    try {
        const option = {
            from: process.env.NODEMAILER_EMAIL,
            to,
            subject,
            html
        };

        await mailtransporter.sendMail(option)
    } catch (error) {
        console.log("error in email", error)
    }
};

module.exports = sendEmail