const userRouter = require('express').Router();

const {
  getUsers,
  getUserById,
  findCurrentUser,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');

const {
  userIdValidator,
  userInfoValidator,
  userAvatarValidator,
} = require('../middlewares/validation');

userRouter.get('/users', getUsers);
userRouter.get('/users/me', findCurrentUser);
userRouter.get('/users/:userId', userIdValidator, getUserById);
userRouter.patch('/users/me', userInfoValidator, updateUserProfile);
userRouter.patch('/users/me/avatar', userAvatarValidator, updateUserAvatar);

module.exports = userRouter;
