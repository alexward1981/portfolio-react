
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

// Config Type
exports.configType = new GraphQLObjectType({
  name: 'config',
  fields: function () {
    return {
      status: {
        type: GraphQLString
      },
      available_from: {
        type: GraphQLString
      },
      special_message: {
        type: GraphQLString
      },
      CV_URL: {
        type: GraphQLString
      }
    }
  }
});