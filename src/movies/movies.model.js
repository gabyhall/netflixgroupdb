const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        
    },
    title: {
        type: String,
        required: true,
    },
    release: {
        type: String,
        
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
        
    }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;