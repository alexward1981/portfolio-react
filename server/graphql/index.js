var GraphQLSchema = require('graphql').GraphQLSchema;
var RootQuery = require('./queries').queryType;
var mutation = require('./mutations');

exports.appSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation
})