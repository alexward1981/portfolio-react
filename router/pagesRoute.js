//Note: The page model has no put api, items can only be retrieved from this part

module.exports = (function() {
  'use strict';
  var express = require('express'),
      router = express.Router();

  // Pull in our model
  var Model = require('../model/pages');

  // Build our route

  router.route('/pages')
    .get(function(req, res) {
      res.json({ message: 'Error: No page selected' });
    });

  router.route('/pages/:page')
    .get(function(req, res) {
      Model.findOne({name: req.params.page}, function(err, item) {
        if (err)
          res.send(err);
        res.json(item);
      });
    })
  return router;
})();
