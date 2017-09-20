// const ReadPreference = require('mongodb').ReadPreference;
// const router = express.Router();
// const mongoose = require('mongoose');
// const Movie = require('../models/movie.model');
const express = require('express');

const router = express.Router();
const _ = require('lodash');

const movieService = require('../services/movie.service');

// require('./db.connect').connect();

// module.exports = function (app) {

router.get('/movies', (req, res) => {
    movieService.getMovies(req, res);
});

router.post('/movie', (req, res) => {
    movieService.postMovie(req, res);
});

// app.postMovie('/movie', function (req, res) {
//     const originalMovie = {
//         id: req.body.id,
//         name: req.body.name,
//         rating: req.body.rating,
//         genre: req.body.genre,
//         stars: req.body.stars,
//         cast: req.body.cast
//     };
//     const movie = new Movie(originalMovie);
//     movie.save(error => {
//         if (checkServerError(res, error)) return;
//         res.status(201).json(movie);
//         console.log('Movie created successfully!');
//     });
// });
// }

module.exports = router;