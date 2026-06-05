const express = require('express');
const sendEmails = require('./config/mail.services');

const app = express();

app.use(express.json());

app.get("/sendmail", async (req, res) => {
    await sendEmails(
        "11shivamrajput89@gmail.com",
        "hello bro",
        "thu kr le bhai trust the process daily practice krte reh ho jayega ak din dekhna thu nest developer banega"
    );

    return res.send("gya gya dekh tere liya  hai")
})

module.exports = app