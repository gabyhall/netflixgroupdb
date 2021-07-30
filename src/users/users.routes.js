const { Router } = require('express');
const userRouter = Router();
const { createUser, findUser, updatePassword, deleteUser, showAllUsers } = require('./users.controllers');

userRouter.post('/users', createUser);
userRouter.get('/users/:username', findUser);
userRouter.put('/users', updatePassword);
userRouter.delete('/users/:username', deleteUser);
userRouter.get('/users', showAllUsers);

module.exports = userRouter;