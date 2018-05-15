var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var ConfigModel = require('../../models/config');
var configType = require('../types/config').configType;

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      configs: {
        type: new GraphQLList(configType),
        resolve: function () {
          const configs = ConfigModel.find().exec()
          if (!configs) {
            throw new Error('Error')
          }
          return configs
        }
      }
    }
  }
});