const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');


authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
    // send json instead
    res.render('auth/login', {
        currentPage: 'login',
    })
})


authRouter.get('/login', authHelpers.loginRedirect, (req,res) => {
    // send json instead
    res.render('auth/register', {
        currentPage: 'register',
    })
})