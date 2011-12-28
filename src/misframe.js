/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler());
  app.enable('view cache');
});

// Routes

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('/page/0', function(req, res) {
	res.redirect('/');
});

app.get('/page/:page', routes.paginated);
app.get('/post/:id', routes.singlePost);

app.get('/rss.xml', routes.rss);

app.get('*', function(req, res) {
	res.redirect('/');
});

app.listen(8002, "127.0.0.1");
