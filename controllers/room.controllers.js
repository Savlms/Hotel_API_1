const roomServices = require("../services/room.services");

class RoomControllers {
    // create room
    async createRoom (req, res) {
        const data = req.body
        
        const foundRoom = await roomServices.getRoomByFilter({name: data.name})
        if(foundRoom) {
            return res.status(409).send({
                message: 'Name already exists',
                success: false
            })
        }

        const createdRoom = await roomServices.createRoom(data)
        return res.status(201).send({
            message: 'Room created successfully',
            success: true,
            data: createdRoom
        })
    }
    //get all room
    async getAllRoom (req, res) {
        const existingRoom = await roomServices.getAllRoom()
        return res.status(200).send({
            message: 'Rooms fetched successfully',
            success: true,
            data: existingRoom
        })
    }
    //get Room
    async getRoomById (req, res) {
        const roomId = req.params.roomId
        const room = await roomServices.getRoom(roomId)
        if(!room) {
            return res.status(409).send({
                message: 'Room not found',
                success: false
            })
        }
        return res.status(200).send({
            message: 'Room found',
            success: true,
            data: room
        })
    }
    //update Room by id
    async updateRoom (req, res) {
        const data = req.body
        const roomId= req.params.roomId
        const updatedRoom = await roomServices.updateRoom(roomId, data)
        return res.status(200).send({
            message: 'Room updated',
            success: true,
            data: updatedRoom
        })
    }
    //delete Room by id
    async deleteRoom (req, res) {
        const {roomId} = req.params
        const deletedRoom = await roomServices.deleteRoom(roomId)
        return res.status(200).send({
            message: 'Room deleted successfully',
            success: true,
            data: deletedRoom
        })
    }
    //get Room by filter
    async getRoomByFilter (req, res) {
        const {search, roomType, minPrice, maxPrice } = req.query
        let queries ={} 
        if (search) {
            queries.search = search
        }
        if (roomType) {
            queries.roomType = roomType
        }
        if (minPrice) {
            queries.price = {$gte: parseInt(minPrice)} 
        }
        if (maxPrice) {
            queries.price = {$lte: parseInt(maxPrice)}
        }
        const getRoomByFilter = await roomServices.getRoomByFilter(queries)
        return res.status(200).send({
            message: 'Room with filters found successfully',
            success: true,
            data: getRoomByFilter
        })
    }
}

module.exports = new RoomControllers();