const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongoUrl = 'mongodb://127.0.0.1:27017/challenge';
mongoose.connect(mongoUrl);


const PORT = 8000;

app.use('/question', require('./router/index'));

app.listen(PORT, () => {
    console.log(`Server Started at port no ${PORT}`);
})