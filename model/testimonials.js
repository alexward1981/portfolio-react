var mongoose     = require('mongoose'),
		Schema       = mongoose.Schema;

var TestimonialsSchema   = new Schema({
  review: String,
  reviewerName: String,
  reviewerTitle: String,
  reviewerCompany: String,
  reviewerProfile: String,
  reviewerImage: String
});

module.exports = mongoose.model('testimonials', TestimonialsSchema, 'testimonials');
