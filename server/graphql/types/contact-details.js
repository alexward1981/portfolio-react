
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var GraphQLString = require('graphql').GraphQLString;

exports.contactDetailsType = new GraphQLObjectType({
  name: 'contactDetails',
  fields: function() {
    return {
      name: {
        type: GraphQLString
      },
      value: {
        type: GraphQLString
      },
      active: {
        type: GraphQLBoolean
      }
    }
  }
})