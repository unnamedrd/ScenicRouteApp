const express = require("express");
const router = express.Router();
const homeController = require("../controller/imageView");
const uploadController = require("../controller/imageUpload");
let routes = (app) => {
  router.get("/", homeController.getImage);
  router.post("/upload", uploadController.uploadFiles);
  router.get("/files", uploadController.getListFiles);
  router.get("/files/:name", uploadController.download);
  return app.use("/", router);
};
module.exports = routes;
