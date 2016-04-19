var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ConfigSchema   = new Schema({
  language: String,
  status: String,
  statusText: String
});

module.exports = mongoose.model('config', ConfigSchema, 'config');
