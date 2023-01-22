"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Video_exports = {};
__export(Video_exports, {
  default: () => Video_default
});
module.exports = __toCommonJS(Video_exports);
var import_sequelize = require("sequelize");
var import_database = __toESM(require("../database"));
class Video extends import_sequelize.Model {
}
;
Video.init({
  videoId: {
    type: import_sequelize.DataTypes.STRING
  },
  title: {
    type: import_sequelize.DataTypes.STRING
  },
  description: {
    type: import_sequelize.DataTypes.STRING
  },
  publishedDateTime: {
    type: import_sequelize.DataTypes.STRING
  },
  thumbnailUrl: {
    type: import_sequelize.DataTypes.STRING
  },
  created: {
    type: import_sequelize.DataTypes.STRING
  },
  channelId: {
    type: import_sequelize.DataTypes.STRING
  },
  channelTitle: {
    type: import_sequelize.DataTypes.STRING
  }
}, {
  sequelize: import_database.default,
  modelName: "video",
  timestamps: false
});
var Video_default = Video;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=Video.js.map
