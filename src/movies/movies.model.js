const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    title: {
        type: String,
        required: true,
    },
    actor: {
        type: String
    },
    watched: {
        type: Boolean,
        required: true,
        default: false
    },
    rating: {
        type: String,
    }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;