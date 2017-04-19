var express = require('express'),
  app = express(),
  path = require('path')

app.use(express.static(__dirname + '/dist'))

var port = process.env.PORT || 8080        // set our port

// ROUTES FOR OUR API
var router = express.Router()              // get an instance of the express Router

// middleware to use for all requests
router.use(function (req, res, next) {
  'use strict'
  // do logging
  console.log('Api Accessed at: ' + Date.now())
  next() // make sure we go to the next routes and don't stop here
})

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res, next) {
  'use strict'
  res.json({ message: 'hooray! welcome to our api!' })
  next()
})

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  'use strict'
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

// START THE SERVER
// =============================================================================
app.listen(port)
