const express = require("express");
const roomController = require("../controllers/roomController");

const routes = express.Router();

routes
  .route("/rooms")
  .get(roomController.findAllRooms)
  .post(roomController.createRoom);
routes
  .route("/rooms/:id")
  .get(roomController.findOneRoom)
  .patch(roomController.updateRoom)
  .delete(roomController.deleteRoom);

module.exports = routes;
