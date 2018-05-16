var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ConfigType = require('../../types/config');
var ConfigModel = require('../../../models/config');

// TODO: Still working on mutations
exports.update = {
  type: ConfigType.configType,
  resolve(root, args, params) {
    return ConfigModel.findOneAndUpdate(
      { 
        $set: { 
          status: params.status,
          available_from: params.available_from,
          special_message: params.special_message,
          CV_URL: params.CV_URL,
        } 
      },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}

