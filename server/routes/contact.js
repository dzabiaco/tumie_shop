const express = require('express');

const contactController = require('../controllers/contact.controller')

const router = express.Router();

router.post(`/contact`, contactController.sendEmail);


module.exports = router;