const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const connection = require('./database/database');

const categoriesController = require('./controllers/categories/CategoriesController');
const articlesController = require('./controllers/articles/ArticlesController');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection
    .authenticate()
    .then(() => {
        console.log('Conexao feita com sucesso.')
    })
    .catch(err => {
        console.log(err)
    });

app.use('/', categoriesController);

app.use('/', articlesController);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(4000, () => {
    console.log('Servidor iniciado.')
});