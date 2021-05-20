var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('index', {
        isItChickenTendersDay: 'Yes',
    });
});

app.listen(3000);
