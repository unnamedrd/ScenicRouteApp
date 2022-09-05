const path = require("path");
const imageView = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/index.ejs`));
};
module.exports = {
  getImage: imageView,
};
