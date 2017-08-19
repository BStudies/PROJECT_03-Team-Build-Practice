
const express = require('express');         //setup express
const movieRoutes = express.Router();       //activate router functionality
const moviesController = require('../controllers/movies-controller');   //create controller

movieRoutes.get('/', moviesController.index);           //handle /movies get
movieRoutes.post('/', moviesController.create);         //handle /movies post





//handles /movies/id request verbs
movieRoutes.get('/:id', moviesController.show);
movieRoutes.put('/:id', moviesController.update);
movieRoutes.delete('/:id',moviesController.delete);

module.exports = movieRoutes;





















