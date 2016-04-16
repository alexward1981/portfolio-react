var mongoose     = require('mongoose'),
		Schema       = mongoose.Schema;

var PagesSchema   = new Schema({
    title : String,
    description : String,
    slug : String,
    inNav : String,
    parent : String,
    canonical : String
});

module.exports = mongoose.model('pages', PagesSchema, 'pages');
