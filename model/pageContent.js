var mongoose     = require('mongoose'),
		Schema       = mongoose.Schema;

var PageContentSchema   = new Schema({
    pageName : String,
    title: String,
    subtitle: String,
    body: String,
    buttonClass: String,
    buttonText: String,
    buttonUrl: String
});

module.exports = mongoose.model('pageContent', PageContentSchema, 'pageContent');
