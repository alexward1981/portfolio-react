var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SocialLinkSchema   = new Schema({
  label: String,
  title: String,
  class: String,
  link: String
});

module.exports = mongoose.model('socialLinks', SocialLinkSchema, 'socialLinks');
