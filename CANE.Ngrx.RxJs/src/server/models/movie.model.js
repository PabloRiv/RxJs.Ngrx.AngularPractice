const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: String,
    rating: String,
    genre: String,
    stars: Number,
    cast: String,
},
{
    collection: 'movies',
    read: 'nearest',
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;