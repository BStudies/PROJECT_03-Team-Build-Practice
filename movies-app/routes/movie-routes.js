
const express = require('express');         //setup express
const movieRoutes = express.Router();       //activate router functionality
const moviesController = require('../controllers/movies-controller');   //create controller
const authHelpers = require('../services/auth/auth-helpers.js')

movieRoutes.get('/',  moviesController.index);           //handle /movies get
movieRoutes.post('/', authHelpers.loginRequired, moviesController.create);         //handle /movies post





//handles /movies/id request verbs
movieRoutes.get('/:id', moviesController.show);
movieRoutes.put('/:id', authHelpers.loginRequired, moviesController.update);
movieRoutes.delete('/:id', authHelpers.loginRequired, moviesController.delete);

module.exports = movieRoutes;





















