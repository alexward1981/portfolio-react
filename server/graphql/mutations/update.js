var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var ConfigType = require('../types/config');
var ConfigModel = require('../../models/config');

exports.update = {
  type: ConfigType.configType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    status: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    return ConfigModel.findByIdAndUpdate(
      params.id,
      { $set: { status: params.status } },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}
