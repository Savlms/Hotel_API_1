const roomTypeServices = require("../services/roomType.services");

class RoomTypeControllers {

    // create roomtype
    async createRoomType (req, res) {
        try {
            // get the data the user sends from the req.ody
            const data = req.body

            // checks to see if the name has already been used since the name field is unique
            const foundRoomType = await roomTypeServices.getRoomTypeByFilter({name: data.name})
            // If found sends an error to the user that the roomtype exists
            if(foundRoomType) {
                return res.status(409).send({
                    message: 'Name already exists',
                    success: false
                })
            }
            // else we go ahead to create the roomtype and send the created roomtype to the user
            const createdRoomType = await roomTypeServices.createRoomType(data)
            return res.status(201).send({
                message: 'Roomtype created successfully',
                success: true,
                data: createdRoomType
            })    
        } catch(err) {
            res.status(500).send({
                message: "Failed to create room",
                error: err.message
            })
        }
    }
    
    // get all roomtype
    async getAllRoomType (req, res) {
        // retrieves all the roomtypes in the database
        const existingRoomType = await roomTypeServices.getAllRoomType()
        // sends a response with the retrieved roomtypes
        return res.status(200).send({
            message: 'Roomtype fetched successfully',
            success: true,
            data: existingRoomType
        })
    }
}

module.exports = new RoomTypeControllers();