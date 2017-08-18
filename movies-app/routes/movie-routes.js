
const express = require('express');         //setup express
const movieRoutes = express.Router();       //activate router functionality
const moviesController = require('../controllers/movies-controller');   //create controller

movieRoutes.get('/', moviesController.index);           //handle /movies get
movieRoutes.post('/', moviesController.create);         //handle /movies post


//handle /movies/add
movieRoutes.get('/add', function(req, res){
    console.log('adding');
    res.render('movies/movie-add', {
        currentPage: 'add',
    });
});


//handles /movies/id request verbs
movieRoutes.get('/:id', moviesController.show);
movieRoutes.get('/:id/edit', moviesController.edit);
movieRoutes.put('/:id', moviesController.update);
movieRoutes.delete('/:id',moviesController.delete);

module.exports = movieRoutes;





















