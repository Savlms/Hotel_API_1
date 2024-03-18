const express = require('express')
const roomControllers = require('../controllers/room.controllers')
const router = express.Router()

router.post('/api/v1/rooms', roomControllers.createRoom)
router.get('/api/v1/rooms', roomControllers.getRoomByFilter)
router.get('/api/v1/rooms/:roomId', roomControllers.getRoomById)
router.patch('/api/v1/rooms/:roomId', roomControllers.updateRoom)
router.delete('/api/v1/rooms/:roomId', roomControllers.deleteRoom)


module.exports = router