const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const uri = process.env.CONNECTION_STRING;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const charactersRouter = require('./routes/characters');
const usersRouter = require('./routes/users');

app.use('/characters', charactersRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});