const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const PORT = process.env.PORT || 8080;
const routes = require('./routes/api')
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});
app.use(routes)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})