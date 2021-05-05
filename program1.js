var express = require('express');
var app = express();

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var DOM = React.DOM;
var body = DOM.body;
var div = DOM.div;
var script = DOM.script;

var browserify = require('browserify');
var babelify = require("babelify");

var TodoBox = require('./views/index.jsx');

app.set('port', (process.argv[2] || 4000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

// let data = [
//     {
//         title: "Shopping"
//         , detail: process.argv[3]
//     }
//     , {
//         title: "Hair cut"
//         , detail: process.argv[4]
//     }
// ];


app.use('/bundle.js', function (req, res) {
    res.setHeader('Content-Type', 'application/javascript');

    browserify("./app.js")
        .transform("babelify", { presets: ["es2015", "react"] })
        .bundle()
        .pipe(res);
});

app.use('/', function (req, res) {
    var initialData = JSON.stringify(data);
    var markup = ReactDOMServer.renderToString(React.createElement(TodoBox, { data: data }));

    res.setHeader('Content-Type', 'text/html');

    var html = ReactDOMServer.renderToStaticMarkup(body(null,
        div({ id: 'app', dangerouslySetInnerHTML: { __html: markup } }),
        script({
            id: 'initial-data',
            type: 'text/plain',
            'data-json': initialData
        }),
        script({ src: '/bundle.js' })
    ));

    res.end(html);
});


// console.log(data)
app.use('/', function (req, res) {
    res.render('index', { data: data });
});

app.listen(app.get('port'), function () {
    console.log('Express server is up on port 4000');
});