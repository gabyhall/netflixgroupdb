const Movie = require('./movies.model');

exports.createMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        const savedMovie = await movie.save();            
        res.status(200).send({ movie: savedMovie, message: "Movie created in database"});
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.findMovie = async (req, res) => {
    try {
        const movie = req.params.title;
        const targetMovie = await Movie.findOne({ title: movie});
        res.status(200).send({ movie: targetMovie });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateWatched =  async (req, res) => {
    try {
        const movie = {
            title: req.body.title,               
        }
        targetMovie.watched = true;
        await targetMovie.save();
        res.status(200).send( {movie: movie, message: 'Movie status updated to watched'});
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.deleteMovie = async (req, res) => {
    try {
        const movie = req.params.title;
        await Movie.deleteOne({title: movie });
        res.status(200).send({ message: 'Movie deleted from database' });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.showAllMovies = async (req, res) => {
    try {
        const list = await Movie.find();
        res.status(200).send({ list });
    } catch (error) {
        res.status(500).send(error);
    }
};