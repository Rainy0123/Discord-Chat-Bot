const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send('Contact Comensal#3014 for a free hosting that made by him. 100% uptime. Using your own one is not recommanded.')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Creator: Comensal#3014")
  })
}

module.exports = keepAlive
