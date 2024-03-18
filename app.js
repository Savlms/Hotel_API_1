const express = require('express')
const app = express()
const dotenv = require('dotenv')
const database = require('./database')
const roomTypeRouter = require('./routes/roomtype.routes')
dotenv.config()
const port = process.env.PORT
const roomRouter = require('./routes/room.routes')


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(roomRouter)
app.use(roomTypeRouter)

app.listen(port, () => {
    database()
    console.log(`server started on ${port}`)
})