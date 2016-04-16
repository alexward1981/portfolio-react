var mongoose     = require('mongoose'),
		Schema       = mongoose.Schema;

var NavSchema   = new Schema({
    label : String,
    url : String,
    state : String,
    position : String
});

module.exports = mongoose.model('nav', NavSchema, 'nav');
