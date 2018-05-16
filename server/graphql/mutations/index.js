var GraphQLObjectType = require('graphql').GraphQLObjectType;

var addConfig = require('./add').add;
var removeConfig = require('./remove').remove;
var config = require('./config');

exports.mutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation',
  fields: function () {
    return {
       updateConfig: config.update
    }
  }
})