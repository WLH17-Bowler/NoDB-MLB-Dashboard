require('dotenv').config()
const express = require('express')
const cors = require('cors')
const home = require('./controllers/homeCtrl')
const player = require('./controllers/playerCtrl')
const {SERVER_PORT} = process.env
const app = express()

app.use(cors())
app.use(express.json())

// ENDPOINTS  
app.get("/api/boxscore", home.getBoxscore)
app.get("/api/boxscores", home.getTodayscores)
app.get("/api/players", player.getPlayers)
app.get("/api/players/:id", player.getPlayer)
app.put('/api/favPlayer', player.updatePlayer)
app.delete('/api/delete', player.deletePlayer)

app.listen(SERVER_PORT, () => console.log(`Server pulse ${SERVER_PORT}`))