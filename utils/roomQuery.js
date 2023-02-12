class GetRoomQuery {
  constructor(room) {
    this.room = room;
  }

  async queryRooms(search, roomType, minPrice, maxPrice) {
    const query = {};

    if (search) {
      query.name = new RegExp(search, "i");
    }
    if (roomType) {
      query.roomType = roomType;
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) {
        query.price.$gte = minPrice;
      }
      if (maxPrice) {
        query.price.$lte = maxPrice;
      }
    }
    const rooms = await this.room.find(query);
    return rooms;
  }
}

module.exports = GetRoomQuery;
