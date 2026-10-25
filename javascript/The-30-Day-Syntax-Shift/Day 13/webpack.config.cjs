const path = require("node:path");

// A .cjs config remains CommonJS even in this type:module package.
module.exports = {
  mode: "production",
  target: "node22",
  entry: path.resolve(__dirname, "bundle-entry.mjs"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.cjs",
  },
  devtool: false,
};
