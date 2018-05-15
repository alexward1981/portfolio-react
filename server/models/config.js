var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Config schema
var ConfigSchema = new Schema({
  status: {
    type: String,
    required: true
  }
});
var Model = mongoose.model('Config', ConfigSchema);
module.exports = Model;