const db = require('../db/config');

const Movie = {};


Movie.findAll = () => {
    return db.query(`
        SELECT * FROM movies
    `)
}


Movie.create = (movie, userid) => {
    return db.one(`
        INSERT INTO movies
        (title, description, genre, user_id)
        VALUES
        ($1,$2,$3,$4)
        RETURNING *
    `, [movies.title, movies.description, movies.genre, userid])
}


Movie.findById = (id) => {
    return db.one(`
        SELECT * FROM movies
        WHERE id = $1
    `, [id])
}


Movie.update = (movie, id) => {
    return db.one(`
        UPDATE movies SET 
        title = $1,
        description = $2, 
        genre = $3,
        WHERE id = $4
        RETUNING * 
    `, [movie.title,movie.description,movie.genre, id])
}


Movie.destroy = (id) => {
    return db.none(`
        DELETE FROM movies
        WHERE id = $1
    `);
}

module.exports = Movie;