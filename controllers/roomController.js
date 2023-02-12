const Room = require("../models/rooms");
const RoomType = require("../models/roomType");
const AppErrorHandler = require("../utils/AppErrorHandler");
const { catchAsync } = require("../utils/catchAsync");
const GetRoomQuery = require("../utils/roomQuery");

//Create a new Room
exports.createRoom = catchAsync(async (req, res, next) => {
  const roomType = await RoomType.findById(req.body.roomType);
  if (!roomType) return next(new AppErrorHandler("Room type not found", 404));

  const room = await Room.create(req.body);

  res.status(201).json({
    message: "Room created successfully 😎",
    status: "success",
    data: {
      room,
    },
  });
});

//Find a particular Room
exports.findOneRoom = catchAsync(async (req, res, next) => {
  const room = await Room.findById(req.params.id);

  if (!room)
    return next(
      new AppErrorHandler(`The room ID: ${req.params.id} does not exist`, 404)
    );
  res.status(200).json({
    message: "Room found 😎",
    status: "success",
    data: {
      room,
    },
  });
});

//Find all Room
exports.findAllRooms = catchAsync(async (req, res, next) => {
  // const rooms = await Room.find(req.query);
  const rooms = new GetRoomQuery();

  res.status(200).json({
    message: "All Rooms found 😎",
    status: "success",
    result: rooms.length,
    data: {
      rooms,
    },
  });
});

//Update a Room
exports.updateRoom = catchAsync(async (req, res, next) => {
  const room = await Room.findOneAndUpdate(req.params.id, req.query, {
    new: true,
    runValidators: true,
  });

  if (!room)
    return next(
      new AppErrorHandler(`No room found with the ID: ${req.params.id}`, 404)
    );

  res.status(200).json({
    message: "Room Types Updated 😎",
    status: "success",
    result: room.length,
    data: {
      room,
    },
  });
});

//Delete a Room Type
exports.deleteRoom = catchAsync(async (req, res, next) => {
  const room = await Room.findOneAndDelete(req.params.id);

  if (!room)
    return next(
      new AppErrorHandler(
        `No room found with the ID: ${req.params.id}. Not deleted!`,
        404
      )
    );

  res.status(200).json({
    message: `room with the ID: ${room} deleted`,
    status: "success",
    data: null,
  });
});
