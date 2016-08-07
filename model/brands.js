var mongoose     = require('mongoose'),
		Schema       = mongoose.Schema;

var BrandsSchema   = new Schema({
  image: String,
  class: String,
  name: String,
  link: String,
});

module.exports = mongoose.model('brands', BrandsSchema, 'APS_brands');
