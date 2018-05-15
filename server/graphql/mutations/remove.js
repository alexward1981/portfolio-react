var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ConfigType = require('../types/config');
var ConfigModel = require('../../models/config');

exports.remove = {
  type: ConfigType.configType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedConfig = ConfigModel.findByIdAndRemove(params.id).exec();
    if (!removedConfig) {
      throw new Error('Error')
    }
    return removedConfig;
  }
}