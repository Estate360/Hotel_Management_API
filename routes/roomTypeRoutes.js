const express = require("express");
const roomTypeController = require("../controllers/roomTypeController");

const routes = express.Router();

routes
  .route("/room-types")
  .get(roomTypeController.findAllRoomTypes)
  .post(roomTypeController.createRoomType);

module.exports = routes;
