const requireDirectory = require("require-directory");
module.exports = requireDirectory(module, {
  rename: name => {
    return name.substr(0, name.search("model") - 1);
  },
});
