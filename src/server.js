require("dotenv").config();
const http = require("http");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const app = express();
const modules = require("./modules");
const router = require("./router");

const server = new ApolloServer({
  modules,
  context: ({ req }) => req.headers,
  introspection: true,
  playground: true,
});

app.use(router);

server.applyMiddleware({ app });

const httpServer = http.createServer(app);

httpServer.listen(5555, console.log(5555 + server.graphqlPath));
