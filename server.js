const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()

const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.FORM_EMAIL,
        pass: process.env.FORM_EMAIL_PASSWORD
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else console.log('ready to send');
});

router.post('/contact', (req, res) => {
    const name = req.body.fullName;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: process.env.FORM_EMAIL,
        subject: 'New Contact from Portfolio',
        html: `
            <p>name: ${name}</p>
            <p>email: ${email}</p>
            <p>message: ${message}</p>
            `
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error)
        } else res.json({ status: 200, message: 'Success'})
    });
});

