const { dirname, join } = require("path");
const { existsSync } = require("fs");

// CommonJS中直接使用__dirname
const dawnNodePath = join(
  __dirname,
  "dist",
  `${process.platform}-${process.arch}.dawn.node`
);

// 导入原生模块
const { create, globals } = require(dawnNodePath);

// 导出模块内容
module.exports = {
  create,
  globals,
};
