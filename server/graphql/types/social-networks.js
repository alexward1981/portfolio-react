
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var GraphQLString = require('graphql').GraphQLString;

exports.socialNetworksType = new GraphQLObjectType({
  name: 'socialNetworks',
  fields: function() {
    return {
      name: {
        type: GraphQLString
      },
      icon_class: {
        type: GraphQLString
      },
      username: {
        type: GraphQLString
      },
      profile_url: {
        type: GraphQLString
      },
      cta: {
        type: GraphQLString
      },
      active: {
        type: GraphQLBoolean
      }
    }
  }
})