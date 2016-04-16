//Note: The language model has no put api, items can only be retrieved from this part

module.exports = (function() {
  'use strict';
  var express = require('express'),
      app = express(),
      router = express.Router();

  // Pull in our model
  var Model = require('../model/lang');

  // Build our route

  router.route('/lang')
    .get(function(req, res) {
      res.json({ message: 'Error: No language selected' });
    });

  router.route('/lang/:language')
    .get(function(req, res) {
      Model.findOne({language: req.params.language}, function(err, item) {
        if (err)
          res.send(err);
        res.json(item);
      });
    })
  return router;
})();
