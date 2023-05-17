const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(201).send({ users }))
    .catch((err) => res.status(500).send(err.message));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(201).send({ data: user }))
    .catch((err) => res.status(500).send(err.message));
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.status(201).send({ data: user }))
    .catch((err) => res.status(500).send(err.message));
};
