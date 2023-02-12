# Hotel Management System API
This is a basic implementation of of CRUD (Create, Read, Update and Delete). 

A backend API built using NodeJS and ExpressJS for a hotel management system. The API provides endpoints for managing room types and rooms.

## Technologies Used
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installation
1. Run `git clone https://github.com/Estate360/Hotel_Management_API` to clone the repository to your local machine.

2. Run `cd hotel-management-api` to navigate to the cloned repository directory.

3. Run `npm install` to install the required dependencies.

Create a .env file and add the following environment variables:

MONGODB_URI=mongodb://<dbuser>:<dbpassword>@<hostname>:<port>/<dbname>
PORT=5000

4. Run `npm start` to start the server.

The API should now be running at http://localhost:5000 or http://localhost:8800.

## API Endpoints

The API provides the following endpoints:

- POST /api/v1/room-types: 
Creates a new room type
- GET /api/v1/room-types: 
Gets all room types
- POST /api/v1/rooms: 
Creates a new room
- GET /api/v1/rooms: 
Gets all rooms with optional filters: search, roomType, minPrice, and maxPrice
- PATCH /api/v1/rooms/:id :
Updates a room
- DELETE /api/v1/rooms/:id :
Deletes a room
- GET /api/v1/rooms/:id : 
Gets a room by ID

## Contributing

If you're interested in contributing to this project, please feel free to fork the repository and make any changes you like. Once you're ready, submit a pull request to have your changes reviewed and merged into the main branch.

### License

This project is licensed under the MIT License. See the [LICENSE](https://chat.openai.com/chat/LICENSE) file for more information.
