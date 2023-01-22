"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var schemaGql_exports = {};
__export(schemaGql_exports, {
  default: () => schemaGql_default
});
module.exports = __toCommonJS(schemaGql_exports);
var import_apollo_server = require("apollo-server");
const typeDefs = import_apollo_server.gql`
 type Query {
    videos(offset:Int!, limit: Int!):[Video]
    countVideos: Int
    video(id:ID!):Video
    searchByTitle(title:String!):[Video]
    searchByDescription(description:String!):[Video]
 }
 type Video{
     id:ID!
     videoId:String
     title:String
     description:String
     publishedDateTime:String
     thumbnailUrl:String
     created:String
     channelId:String
     channelTitle:String
 }
 type Mutation{
     addVideo(videoNew:VideoInput!):Video
 }
 input VideoInput{
     videoId:String
     title:String
     description:String
     publishedDateTime:String
     thumbnailUrl:String
     created:String
     channelId:String
     channelTitle:String
 }
`;
var schemaGql_default = typeDefs;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=schemaGql.js.map
