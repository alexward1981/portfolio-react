var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Config schema
var configSchema = new Schema({
  status: {
    type: String,
    required: true
  }
});
var Model = mongoose.model('Config', configSchema);
module.exports = Model;