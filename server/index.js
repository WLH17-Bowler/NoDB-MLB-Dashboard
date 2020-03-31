require('dotenv').config()
const express = require('express')
const cors = require('cors')
const home = require('./controllers/homeCtrl')
const player = require('./controllers/playerCtrl')
const {SERVER_PORT} = process.env
const app = express()

app.use(cors())
app.use(express.json())

// API DATA ENDPOINTS
app.get("/api/boxscore", home.getBoxscore)
app.get("/api/boxscores", home.getTodayscores)
app.get("/api/players", home.getPlayers)
app.get("/api/player/:id", home.getPlayer)

// LOCAL ENPOINTS
app.get("/api/roster", player.getRoster)
app.post("/api/roster", player.createPlayer)    
app.put("/api/roster/:id", player.editPlayer)
app.delete("/api/roster/:id", player.deletePlayer)

app.listen(SERVER_PORT, () => console.log(`⇌  pulse ${SERVER_PORT}`))