const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");
md = new markdownIt();
const readme = fs.readFileSync(path.join(__dirname, "./README.md"), "utf-8");
const result = md.render(readme);
class Index {
  // or `async data() {`
  // or `get data() {`
  data() {
    return {
      title: "JSONSchema 4 render.yml",
      layout: "default.liquid",
    };
  }

  render({ title }) {
    return result;
  }
}

module.exports = Index;
