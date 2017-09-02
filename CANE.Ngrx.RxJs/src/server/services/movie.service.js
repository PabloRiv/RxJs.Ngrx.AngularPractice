const Movie = require('../models/movie.model');
const ReadPreference = require('mongodb').ReadPreference;
// const mongoose = require('mongoose');

const _ = require('lodash');

require('../db.connect').connect();

// module.exports = function (app) {

    function checkServerError(res, error) {
        if (error) {
          res.status(500).send(error);
          return error;
        }
      }

    function getMovies(req, res) {
        const docquery = Movie.find({}).read(ReadPreference.NEAREST);
        docquery
            .exec()
            .then((movies) => {
                res.status(200).json(movies);
            })
            .catch((error) => {
                res.status(500).send(error);
                // return;
            });
    }

    // function postMovie(req, res) {
    //     const originalMovie = {
    //         id: req.body.id,
    //         name: req.body 
    //     }
    // }    

    function postMovie(req, res) {
        const originalMovie = {
            id: req.body.id,
            name: req.body.name,
            rating: req.body.rating,
            genre: req.body.genre,
            stars: req.body.stars,
            cast: req.body.cast,
        };
        const movie = new Movie(originalMovie);
        movie.save((error) => {
            if (checkServerError(res, error)) return;
            res.status(201).json(movie);
            console.log('Movie created successfully!');
        });
    }

    
// }