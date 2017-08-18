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
    .then( res => {
        res.redirect('/movies')
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
}

moviesController.show = () => {
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
movieController.update = function(req, res){
    Movie.update({
        title: req.body.title,
        genre: req.body.genre,
        description: req.body.description,
    }, req.params.id).then(function(movie){
        res.redirect(`/movies/${req.params.id}`);
    }).catch(function(err){
        console.log(err);
        res.status(500).json(err);
    })
}




movieController.edit = function(req, res){
    Movie.findById(req.params.id)
    .then(function(movie){
        res.render('movies/movie-single-edit',{
            currentPage: 'edit',
            data: movie,
        })
    }).catch(function(err){
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