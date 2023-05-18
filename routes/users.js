const userRoutes = require('express').Router();

const {
  getUsers,
  createUser,
  getUserById,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');

userRoutes.get('/users', getUsers);
userRoutes.get('/users/:userId', getUserById);
userRoutes.post('/users', createUser);
userRoutes.patch('/users/me', updateUserProfile);
userRoutes.patch('/users/me/avatar', updateUserAvatar);

module.exports = userRoutes;
