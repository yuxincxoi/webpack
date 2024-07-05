const path = require("path");

module.exports = {
  entry: "./dist/work.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "work.bundle.js",
  },
};
