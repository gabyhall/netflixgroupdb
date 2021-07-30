const Movie = require('./movies.model');
const User = require('../users/users.model');

exports.createMovie = async (req, res) => {
    try {
    
        const movie = new Movie({      //connects with user //
            title: req.body.title,
            actor: req.body.actor,
        });
        const savedMovie = await movie.save();
        const user = req.body.user;
        const dbUser = await User.findOne({username: user});
        await Movie.findOne({title: movie.title}).updateOne({user: dbUser})
        res.status(200).send({ movie: savedMovie, user: dbUser, message: "Movie created in database"});
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
        const user = req.body.user;            //connects with user //
        const dbUser = await User.findOne({username: user});
        const targetMovie = await Movie.findOne({title: movie.title, user: dbUser});
        targetMovie.watched = true;
        await targetMovie.save();
        res.status(200).send( {movie: movie, message: 'Movie status updated to watched'});
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.rateMovie =  async (req, res) => {
    try {
        const movie = {
            title: req.body.title,          // have to put title in params & in body or does updateWatched atm //
            user: req.body.user,
            rating: req.body.rating
        }
        const user = req.body.user;          //connects with user //
        const dbUser = await User.findOne({username: user});
        const targetMovie = await Movie.findOne({title: movie.title, user: dbUser});
        targetMovie.rating = movie.rating;
        await targetMovie.save();
        res.status(200).send( {movie: movie, message: 'Movie rating updated'});
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