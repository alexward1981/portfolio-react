//Note: The pageContent model has no put api, items can only be retrieved from this part

module.exports = (function() {
  'use strict';
  var express = require('express'),
      router = express.Router();

  // Pull in our model
  var Model = require('../model/pageContent');

  // Build our route
  router.route('/pageContent')
    .get(function(req, res) {
      res.json({ message: 'Error: No page selected' });
    });

    router.route('/pageContent/all')
      .get(function(req, res) {
        Model.find(function(err, item) {
          if (err) {
            res.send(err);
          }
          res.json(item);
        });
      })

    router.route('/pageContent/:pageName')
      .get(function(req, res) {
        Model.findOne({pageName: req.params.pageName}, function(err, item) {
          if (err) {
            res.send(err);
          }
          res.json(item);
        });
      })

  return router;
})();
