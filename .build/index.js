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
var import_axios = __toESM(require("axios"));
var import_node_schedule = __toESM(require("node-schedule"));
var import_graphql_request = require("graphql-request");
const predefinedQueries = ["cricket", "football", "India", "Modi", "BJP", "Ram Mandir"];
const random = (mn, mx) => Math.floor(Math.random() * (mx - mn) + mn);
const getRandom = (arr) => arr[random(0, arr.length - 1)];
const apiKeys = ["AIzaSyBKXPOi2MNRfAaxn1Usm2pmE_RylZPRifE", "AIzaSyBT98USDtFiJI66SqOj7qyRK2OF4YO44EM"];
const populateDB = async () => {
  try {
    const now = new Date().toISOString();
    const { data } = await import_axios.default.get(`https://youtube.googleapis.com/youtube/v3/search?q=${getRandom(predefinedQueries)}&part=snippet&maxResults=10&order=date&publishedAfter=${now}&key=${getRandom(apiKeys)}`);
    if ((data == null ? void 0 : data.items.length) > 0) {
      data == null ? void 0 : data.items.map(async (d) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
        let description = (_a = d == null ? void 0 : d.snippet) == null ? void 0 : _a.description.replace(/'/g, "\u2032");
        description = description.replace(/^"|"/g, "\u2032");
        await (0, import_graphql_request.request)("https://ytbackend.bhargabnath.repl.co", `
        mutation {
          addVideo(videoNew:{
            videoId: "${(_b = d == null ? void 0 : d.id) == null ? void 0 : _b.videoId}",
            title: "${((_c = d == null ? void 0 : d.snippet) == null ? void 0 : _c.title) ? (_d = d == null ? void 0 : d.snippet) == null ? void 0 : _d.title : "no title"}",
            description: "${description}",
            channelId: "${(_e = d == null ? void 0 : d.snippet) == null ? void 0 : _e.channelId}",
            channelTitle: "${(_f = d == null ? void 0 : d.snippet) == null ? void 0 : _f.channelTitle}",
            thumbnailUrl: "${((_i = (_h = (_g = d == null ? void 0 : d.snippet) == null ? void 0 : _g.thumbnails) == null ? void 0 : _h.high) == null ? void 0 : _i.url) ? (_l = (_k = (_j = d == null ? void 0 : d.snippet) == null ? void 0 : _j.thumbnails) == null ? void 0 : _k.high) == null ? void 0 : _l.url : "https://i.ytimg.com/vi/9h0ROL1mqAI/hqdefault.jpg"}",
            publishedDateTime: "${((_m = d == null ? void 0 : d.snippet) == null ? void 0 : _m.publishedAt) ? (_n = d == null ? void 0 : d.snippet) == null ? void 0 : _n.publishedAt : "blank"}",
            created: "${((_o = d == null ? void 0 : d.snippet) == null ? void 0 : _o.publishTime) ? (_p = d == null ? void 0 : d.snippet) == null ? void 0 : _p.publishTime : "blank"}"
          }) {
            id
          }
        }`);
      });
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
    setTimeout(populateDB, 1e3);
  }
};
import_node_schedule.default.scheduleJob("*/10 * * * * *", async () => {
  console.log("fetching youtube data every 10 seconds...");
  await populateDB();
});
//# sourceMappingURL=index.js.map
