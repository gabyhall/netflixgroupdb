const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    user: {
        userID: [{type: mongoose.Schema.Types.ObjectID, ref: 'User'}],
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