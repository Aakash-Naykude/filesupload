const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/tmp/my-uploads");
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniquePrefix + "-" + file.fieldname);
  },
});

module.exports = multer({
  storage,
  fileFilter,
  limits: {
    fieldSize: 1024 * 1024 * 5,
  },
});
