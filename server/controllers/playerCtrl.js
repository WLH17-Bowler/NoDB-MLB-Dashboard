const axios = require('axios')

const playerFeed = []
const favPlayer = ["Bryce Harper"]

module.exports = {
    getPlayers: (req, res) => {
        axios.get("https://api.sportradar.us/mlb/trial/v6.6/en/seasons/2019/REG/teams/2142e1ba-3b40-445c-b8bb-f1f8b1054220/statistics.json?api_key=8jy4kw4c5vafvy639bqtahsq")
        .then(response => {
            playerFeed.push(response.data)
            res.status(200).send(playerFeed)
        }).catch(err => console.log(err))
    },
    getPlayer: (req, res) => {
        axios.get("https://api.sportradar.us/mlb/trial/v6.6/en/players/f3caeac6-343a-4a01-b5a3-85c5485c57cb/profile.json?api_key=8jy4kw4c5vafvy639bqtahsq")
        .then(response => {
            playerFeed.push(response.data)
            res.status(200).send(playerFeed)
        }).catch(err => console.log(err))
    },
    updatePlayer: (req, res) => {
        const {favePlayer} = req.body
        console.log(req.body)
        favPlayer.splice(0, 1, favePlayer)
        res.status(200).send(favPlayer)
    },
    deletePlayer: (req, res) => {
        favPlayer.splice(0, 1)
        res.status(200).send(favPlayer)
    }
}