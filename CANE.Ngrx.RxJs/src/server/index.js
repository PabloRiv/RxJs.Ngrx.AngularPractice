const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movie.routes');
// const router = express.Router();

const root = './';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));

// var movies = require('../routes/movie.routes')(app);

// structure routes from more specific to general
app.use(express.static(path.join(root, 'dist')));
app.use('/api/movies', movieRoutes);

// router.get('/api/movies', (req, res) => {
//     movies.getMovies(req,res);
// })

app.get('*', (req, res) => {
    res.sendFile('dist/index.html', {
        root: root,
    });
});

// const port = process.env.PORT || '3000';
const port = process.env.PORT || '5190';
app.listen(port, () => console.log(`API running on localhost:${port}`));

