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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static('static'));

app.get('/', function(req, res) {
    res.render('index', {
        isItChickenTendersDay: false,
    });
});
app.post('/', function(req, res) {
    const phone = req.body.phone.replace(/[^0-9]/g, '');
    res.sendStatus(StatusCodes.OK);
});

app.listen(process.env.PORT || 3000);
