//Note: The language model has no put api, items can only be retrieved from this part

module.exports = (function() {
  'use strict';
  var express = require('express'),
      app = express(),
      router = express.Router();

  // Pull in our model
  var Model = require('../model/socialLinks');

  // Build our route

  router.route('/socialLinks')
    .get(function(req, res) {
      Model.find(function(err, item) {
        if (err)
          res.send(err);
        res.json(item);
      });
    })
  return router;
})();
