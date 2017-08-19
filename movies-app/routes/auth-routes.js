const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');


// authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
//     // send json instead
//     res.render('auth/login', {
//         currentPage: 'login',
//     })
// })


// authRouter.get('/login', authHelpers.loginRedirect, (req,res) => {
//     // send json instead
//     res.render('auth/register', {
//         currentPage: 'register',
//     })
// })


authRouter.post('/register', usersController.create);

authRouter.post('/login', passport.authenticate('local', {
        successRedirect: '/user',
        failureRedirect: '/auth/login',
        failureFlash: true,
    })
)


authRouter.get('/logout', (req, res)=>{
    req.logout();
    res.json({
        message: 'logged out',
        auth: false,
    })
})


authRouter.get('/success', (req, res) => {
    res.json({
        auth: true,
        message: 'ok',
        user: req.user,
    })
})

authRouter.get('/failure', (req, res) => {
    res.json({
        auth: false,
        message: 'Login failed',
        user: null,
    })
})


module.exports = authRouter;