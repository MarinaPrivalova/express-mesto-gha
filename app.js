const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000, MONGO_URL = 'mongodb://localhost:27017/mestodb' } = process.env;
const app = express();

mongoose.connect(MONGO_URL);

app.listen(PORT);
