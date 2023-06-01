const cardRouter = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

const {
  cardValidator, cardIdValidator,
} = require('../middlewares/validation');

cardRouter.get('/cards', getCards);
cardRouter.post('/cards', cardValidator, createCard);
cardRouter.delete('/cards/:cardId', cardIdValidator, deleteCard);
cardRouter.put('/cards/:cardId/likes', cardIdValidator, likeCard);
cardRouter.delete('/cards/:cardId/likes', cardIdValidator, dislikeCard);

module.exports = cardRouter;
