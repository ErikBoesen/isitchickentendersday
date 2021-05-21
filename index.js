var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('static'));

app.get('/', function(req, res){
    res.render('index', {
        isItChickenTendersDay: false,
    });
});

app.listen(3000);
