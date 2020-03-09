const axios = require('axios')
const boxData = []
const boxLeagueData = []

module.exports = {
    getTodayscores: (req, res) => {
        axios.get("https://api.sportradar.us/mlb/trial/v6.6/en/games/2020/03/08/boxscore.json?api_key=8jy4kw4c5vafvy639bqtahsq")
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
    }
}