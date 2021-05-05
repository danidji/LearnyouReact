var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 4000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

let data = [
    { "Shopping": process.argv[3] }
    , { "Hair cut": process.argv[4] }
];
console.log(data)
app.use('/', function (req, res) {
    res.render('index', { data: data });
});

app.listen(app.get('port'), function () {
    console.log('Express server is up on port 4000');
});