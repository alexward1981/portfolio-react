var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/dist'));

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
  'use strict';
  // do logging
  console.log('Api Accessed at: '+ Date.now());
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res, next) {
  'use strict';
  res.json({ message: 'hooray! welcome to our api!' });
  next();
});

// Load in our routers
var ConfigRoute = require('./router/configRoute');
var LangRoute = require('./router/langRoute');
var SocialLinkRoute = require('./router/socialLinkRoute');
var PagesRoute = require('./router/pagesRoute');
var PageContentRoute = require('./router/pageContentRoute');
var Skills = require('./router/skillsRoute');
var Brands = require('./router/brandsRoute');
var Testimonials = require('./router/testimonialsRoute');

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use('/api', ConfigRoute);
app.use('/api', LangRoute);
app.use('/api', SocialLinkRoute);
app.use('/api', PagesRoute);
app.use('/api', PageContentRoute);
app.use('/api', Skills);
app.use('/api', Brands);
app.use('/api', Testimonials);

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  'use strict';
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('The api is running on port: ' + port);

const mongoString = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost:27017/portfolio';

mongoose.connect(mongoString)
