const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");
const indexHtml = fs.readFileSync(
  path.join(__dirname, "../index.html"),
  "utf8"
);
const window = new JSDOM(indexHtml).window;
const document = window.document;
global.document = document;
global.window = window;

module.exports = { document };
