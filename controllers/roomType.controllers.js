const roomTypeServices = require("../services/roomType.services");

class RoomTypeControllers {
    // create roomtype
    async createRoomType (req, res) {
        const data = req.body

        const foundRoomType = await roomTypeServices.getRoomTypeByFilter({name: data.name})
        if(foundRoomType) {
            return res.status(409).send({
                message: 'Name already exists',
                success: false
            })
        }

        const createdRoomType = await roomTypeServices.createRoomType(data)
        return res.status(201).send({
            message: 'Roomtype created successfully',
            success: true,
            data: createdRoomType
        })
    }
    //get all roomtype
    async getAllRoomType (req, res) {
        const existingRoomType = await roomTypeServices.getAllRoomType()
        return res.status(200).send({
            message: 'Roomtype fetched successfully',
            success: true,
            data: existingRoomType
        })
    }
}

module.exports = new RoomTypeControllers();