var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var ConfigModel = require('../../models/config');
var ConfigType = require('../types/config').configType;

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      config: {
        type: new GraphQLList(ConfigType),
        resolve: function () {
          const config = ConfigModel.find()
          if (!config) {
            throw new Error('Error')
          }
          return config
        }
      }
    }
  }
});