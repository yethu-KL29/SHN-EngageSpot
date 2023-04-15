const express = require('express');
const userRouter = express.Router();

const { userSignup, login,getUser } = require('../Controller/userController');
userRouter.post('/signup',userSignup);
userRouter.post('/login',login);
userRouter.get('/getuser',getUser);


module.exports = userRouter;

