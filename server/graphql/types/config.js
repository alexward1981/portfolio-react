
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

// Config Type
exports.configType = new GraphQLObjectType({
  name: 'config',
  fields: function () {
    return {
      status: {
        type: GraphQLString
      }
    }
  }
});