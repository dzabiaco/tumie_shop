const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res, next) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'chudomaldovan@gmail.com',
            pass: 'qwertyqwerty1'
        }
    });
    const mailOptions = {
        from: req.body.email,
        to: 'chudomaldovan@gmail.com',
        subject: req.body.title,
        text: req.body.message
    };
    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    console.log(req.body);
    res.send({"msg": req.body});
}