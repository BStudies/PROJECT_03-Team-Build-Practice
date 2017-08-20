const Movie = require('../models/movie')

const moviesController = {};



moviesController.index = (req, res) => {
    Movie.findAll()
    .then(movies => {
        res.json({
            message: 'ok',
            data: movies,
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}

moviesController.create = (req, res) => {
    Movie.create({
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre,
    },req.user.id)
    .then( movie => {
        res.json({
            message: 'Movie has been added',
            data: movie,
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
}

moviesController.show = (req, res) => {
    Movie.findById(req.params.id)
    .then(movie=>{
        res.json({
            message: 'ok',
            data: movie,
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
}

//put
moviesController.update = function(req, res){
    Movie.update({
        title: req.body.title,
        genre: req.body.genre,
        description: req.body.description,
    }, req.params.id)
    .then(movie => {
        res.json({
            message: 'Movie updated',
            data: movie,
        })
    })
    .catch(function(err){
        console.log(err);
        res.status(500).json(err);
    })
}






moviesController.delete = () => {
    Movie.destroy(req.params.id)
    .then(()=>{
        res.json({
            message: 'movie deleted',
        })
    })
    .catch (err => {
        console.log(err)
        res.status(500).json(err);
    });
}


module.exports = moviesController;