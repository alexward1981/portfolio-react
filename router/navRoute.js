module.exports = (function() {
  'use strict';
  var express = require('express'),
      app = express(),
      router = express.Router();

  // Pull in our model
  var Model = require('../model/nav');

  // Build our route
  router.route('/nav')
    .post(function(req, res) {
      var model = new Model();
      model.label = req.body.label;
      model.url = req.body.url;
      model.state = req.body.state;
      model.position = req.body.position;

      // save the bear and check for errors
      model.save(function(err) {
          if (err)
              res.send(err);
          res.json({ message: 'Nav Item created!' });
      });
    })
    .get(function(req, res) {
      Model.find(function(err, item) {
        if (err)
          res.send(err);
          res.json(item);
      });
    });

  router.route('/nav/:item_id')
    .get(function(req, res) {
      Model.findById(req.params.item_id, function(err, item) {
        if (err)
          res.send(err);
        res.json(item);
      });
    })
    .put(function(req, res) {
        Model.findById(req.params.item_id, function(err, item) {
            if (err)
              res.send(err);
              item.label = req.body.label;
              item.url = req.body.url;
              item.state = req.body.state;
              item.position = req.body.position;

            item.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Nav updated!' });
            });

        });
    })
    .delete(function(req, res) {
      Model.remove({
        _id: req.params.item_id
      }, function(err, item) {
        if (err)
            res.send(err);
        res.json({ message: 'Successfully deleted' });
      });
    });
  return router;
})();
