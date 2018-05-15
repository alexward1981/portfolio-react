var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var configType = require('../types/config');
var configModel = require('../../models/config');

exports.add = {
  type: configType.configType,
  args: {
    statis: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    const uModel = new configModel(params);
    const newConfig = uModel.save();
    if (!newConfig) {
      throw new Error('Error');
    }
    return newConfig
  }
}