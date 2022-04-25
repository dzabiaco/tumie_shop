const express = require('express');

const userController = require('../controllers/user.controller')

const router = express.Router();

router.get(`/get-user/:id`, userController.getUserInfo);
router.post(`/register`, userController.registerUser);
router.post(`/login`, userController.loginUser);
router.post('/update-user', userController.updateUserInfo);
router.post('/save-order/:id',userController.saveOrder);
router.get('/orders/:id', userController.getOrders);
router.get('/orders/:id/:order', userController.getOrderById);


module.exports = router;