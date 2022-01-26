const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path:'./.env'})
console.log(process.env.MONGODB_URI)
 const PORT = process.env.PORT || 8080;
const apiRoutes = require('./routes/api')
const htmlRoutes = require('./routes/html')
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});
app.use(apiRoutes)
app.use(htmlRoutes)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})