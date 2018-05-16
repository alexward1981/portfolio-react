// Import env file
require('dotenv').config()

// Import dependencies
const express = require("express");
const mongoose = require('./config/mongoose');
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const db = mongoose();
const app = express();

app.use('*', cors());

// import schemas
const configSchema = require('./graphql/index').configSchema;

// Set up schemas with Express endpoint
app.use('/graphql', cors(), graphqlHTTP({
  schema: configSchema,
  rootValue: global,
  graphiql: true
}));

// Up and Running at Port 4000
app.listen(process.env.PORT || 4000, () => {
  console.log('A GraphQL API running at http://localhost:4000');
});