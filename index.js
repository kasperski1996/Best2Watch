const express = require('express');
const dal = require('./data/DAL');
const app = express();
const PORT = 3001;
const movieCtrl = require('./controllers.js/movie.ctrl')
// Routers

const moviesCtrl = require('./controllers.js/movie.ctrl');
// app.use('/', express.static);
app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json());

app.use('/api/movie', moviesCtrl);

app.listen(PORT, () => console.log(`server started at port ${PORT}`));