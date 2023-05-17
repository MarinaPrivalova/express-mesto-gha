const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1/mestodb')
  .then(() => console.log('База данных подключена'))
  .catch((err) => console.log('Ошибка подключения к БД', err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
