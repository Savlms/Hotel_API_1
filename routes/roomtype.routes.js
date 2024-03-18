const express = require('express')
const roomTypeControllers = require('../controllers/roomType.controllers')
const router = express.Router()

router.post('/api/v1/rooms-types', roomTypeControllers.createRoomType)
router.get('/api/v1/rooms-types', roomTypeControllers.getAllRoomType)

module.exports = router