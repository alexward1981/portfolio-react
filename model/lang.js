var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LangSchema   = new Schema({
    language: String,
    definitions: {
    	mobileMenuLabel: String,
    	siteTitle: String
  }
});

module.exports = mongoose.model('lang', LangSchema, 'APS_lang');
