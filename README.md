# HOTEL API

Overview


* A simple API for managing hotel operations. It provides services for managing users, rooms and room types. The API has two main components:  Room and Room Type.

# Room Type

The Room Type component represents a type of room available in a hotel. A Room Type has the following property:

* name: A unique name for the room type.

# Room

The Room component represents a single room in a hotel. A Room has the following properties:

* name: A unique name for the room.
* roomType: The type of room, represented as an -ObjectId that refers to a Room Type.
* price: The price of the room.
* floor: The floor of the room.
* capacity: The maximum capacity of the room.
* amenities: An array of strings representing the amenities available in the room.
* booked: A boolean indicating whether the room is currently booked or not.

# How To Use

* Clone the repo
* cd into the directory such that you are in hotel api.
* Create a project on mongodb and copy your DATABASE_URI
* Create a .env file at the root of the folder and include your DATABASE_URI and a secret_key to generate tokens in the file in the format below
* DB_URI = {The DATABASE_URI you created}
* SECRET = {Your secret keyword}

# To run the solution, make sure you have nodejs installed.
Use the following command in your terminal to initialize the applicationa and to install the necessary dependencies.
* npm init -y
* npm install
* nodemon app

# Testing
* You need to have Postman or any other similar app or extension installed to test this API.
* Make sure to specify the url, token and id correctly when making requests
# Routes
The API has two main routes:  Room and Room Type routes.


# Room Type Routes
* POST "{baseUrl}/api/v1/rooms-types": Creates a new room type. Can only be performed by an admin.
* GET "{baseUrl}/api/v1/rooms-types": Retrieves all room types in the hotel.
* GET "{baseUrl}/api/v1/rooms-types/:id": Retrieves a room type in the hotel using an id.
* DELETE "{baseUrl}/api/v1/rooms-types/:id": Deletes a room type by its id. Can only be performed by an admin.


# Room Routes
* POST "{baseUrl}/api/v1/rooms": Creates a new room in the hotel. Can only be performed by an admin.
* GET "{baseUrl}/api/v1/rooms/:id": Retrieves a room by its id.
* GET "{baseUrl}/api/v1/rooms": Retrieves all rooms in the hotel using some queries.
* PATCH "{baseUrl}/api/v1/rooms/:id": Updates a room by its id. Can only be performed by an admin.
* DELETE "{baseUrl}/api/v1/rooms/:id": Deletes a room by its id. Can only be performed by an admin.





# live link: https://hotel-api-1.onrender.com