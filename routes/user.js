const userRoutes = require('express').Router();

const { getUsers, createUser, getUserById } = require('../controllers/user');

userRoutes.get('/users', getUsers);
userRoutes.get('/users/:userId', getUserById);
userRoutes.post('/users', createUser);

module.exports = userRoutes;
