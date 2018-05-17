var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ConfigType = require('../../types/config');
var ConfigModel = require('../../../models/config');

// TODO: Still working on mutations
exports.update = {
  type: ConfigType.configType,
  description: 'Update a config item',
  args: {
    configUpdate: { type: ConfigType.configInputType }
  },
  resolve(root, { configUpdate }) {
    return ConfigModel.findOneAndUpdate(
      {"_id": "5afaf49ab10a8da744ea6a00" },
      { 
        status: configUpdate.status,
        available_from: configUpdate.available_from,
        special_message: configUpdate.special_message,
        CV_URL: configUpdate.CV_URL,
      },
      { new: true }
    ).exec()
    .catch(err => new Error(err));
  }
}

