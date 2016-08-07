var mongoose     = require('mongoose'),
		Schema       = mongoose.Schema;

var PagesSchema   = new Schema({
    name : String,
    title : String,
    description : String,
    slug : String,
    inNav : String,
    parent : String,
    canonical : String,
    class : String
});

module.exports = mongoose.model('pages', PagesSchema, 'APS_pages');
