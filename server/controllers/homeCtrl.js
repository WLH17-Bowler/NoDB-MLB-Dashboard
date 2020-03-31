const axios = require('axios')
const boxData = []
const boxLeagueData = []
const playerFeed = []

module.exports = {
    getTodayscores: (req, res) => {
        axios.get("https://api.sportradar.us/mlb/trial/v6.6/en/games/2019/09/04/boxscore.json?api_key=8jy4kw4c5vafvy639bqtahsq")
        .then(response => {
            boxLeagueData.push(response.data)
            res.status(200).send(boxLeagueData)
        }).catch(err => console.log(err))
    },
    getBoxscore: (req, res) => {
        axios.get("https://api.sportradar.us/mlb/trial/v6.6/en/games/d4f1ecee-8318-42e7-8ce9-90411d089dfa/boxscore.json?api_key=8jy4kw4c5vafvy639bqtahsq")
        .then(response => {
            boxData.push(response.data)
            res.status(200).send(boxData)
        }).catch(err => console.log(err))
    },
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
    }
}