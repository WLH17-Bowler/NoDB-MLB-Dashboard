let playerData = require('../../src/player-data')
let id = 10

module.exports = {
  getRoster: (req, res) => {
    res.status(200).send(playerData)
  },
  createPlayer: (req, res) => {
    console.log(req.body, 'req.body')
    const {name, img, team, position} = req.body

    let newPlayer = {
      id,
      name,
      img,
      team,
      position
    }
    id++
    playerData.unshift(newPlayer)
    res.status(200).send(playerData)
  },
  editPlayer: (req,res) => {
    const {id} = req.params
    const {name, img, team, position} = req.body
    const index = playerData.find(e => e.id === +id)
    playerData[index] = {
        id: +id,
        name,
        img,
        team,
        position
    }
    res.status(200).send(playerData)
  },
  deletePlayer: (req,res) => {
    const {id} = req.params
    const index = playerData.find(e => e.id === +id)
    playerData.splice(index, 1)
    res.status(200).send(playerData)
  }
}