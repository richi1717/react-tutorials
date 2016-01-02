var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// var React = require('react');
// var ReactDOMServer = require('react-dom/server');
// require('babel-register');
var exphbs = require('express-handlebars');

// var MyComponent = React.createFactory(require('./components/MyComponent.js').MyComponent);
// var markup = ReactDOMServer.renderToString(MyComponent());

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'handlebars');

//  Set port
app.set('port', (process.env.PORT || 3000));

//  Set Static path
app.use(express.static(path.join(__dirname, 'client')));

//  BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  console.log('hey troy');
  res.render('home');

});

//  Start Server
app.listen(app.get('port'), function () {
  console.log('Server has started on port: ' + app.get('port'));
});