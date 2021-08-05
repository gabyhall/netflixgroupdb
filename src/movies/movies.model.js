const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    release: {
        type: String,
        required: true,
    },
    watched: {
        type: Boolean,
        required: true,
        default: false
    },
    imageURL: {
        type: String,
    },
    filmID: {
        type: String,
        required: true,
    }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;