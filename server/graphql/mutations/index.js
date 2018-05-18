var GraphQLObjectType = require('graphql').GraphQLObjectType

var addConfig = require('./add').add
var removeConfig = require('./remove').remove
var config = require('./config')
var skills = require('./skills')
var brands = require('./brands')

exports.mutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation',
  fields: function () {
    return {
      updateConfig: config.update,
      addSkill: skills.add,
      updateSkill: skills.update,
      removeSkill: skills.remove,
      addBrand: brands.add,
      updateBrand: brands.update,
      removeBrand: brands.remove
    }
  }
})
