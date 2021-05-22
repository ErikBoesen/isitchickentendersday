const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const knex = require('knex');
const app = express();

const pg = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
});

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('static'));

app.get('/', function(req, res){
    res.render('index', {
        isItChickenTendersDay: false,
    });
});

app.listen(process.env.PORT || 3000);
