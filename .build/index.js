"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_apollo_server = require("apollo-server");
var import_apollo_server_core = require("apollo-server-core");
var import_schemaGql = __toESM(require("./schemaGql"));
var import_resolvers = __toESM(require("./resolvers"));
var import_database = __toESM(require("./database"));
import_database.default.sync().then(() => console.log("DB ready"));
const server = new import_apollo_server.ApolloServer({
  typeDefs: import_schemaGql.default,
  resolvers: import_resolvers.default,
  plugins: [
    (0, import_apollo_server_core.ApolloServerPluginLandingPageGraphQLPlayground)()
  ]
});
server.listen().then(({ url }) => {
  console.log(`\u{1F680}  Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map
