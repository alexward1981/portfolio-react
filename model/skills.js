var mongoose     = require('mongoose'),
		Schema       = mongoose.Schema;

var SkillsSchema   = new Schema({
  levels: [
    {
      name: String,
      level: Number
    }
  ],
  skills: [
    {
      key: String,
      name: String,
      level: Number
    }
  ],
  intro: String
});

module.exports = mongoose.model('skills', SkillsSchema, 'skills');
