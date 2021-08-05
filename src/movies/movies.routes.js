const { Router } = require('express');
const movieRouter = Router();
const { createMovie, findMovie, updateWatched, deleteMovie, showAllMovies } = require('./movies.controllers');

movieRouter.post('/movies', createMovie);
movieRouter.get('/movies/:title', findMovie);
movieRouter.put('/movies', updateWatched);
movieRouter.delete('/movies/:title', deleteMovie);
movieRouter.get('/movies', showAllMovies);

module.exports = movieRouter;