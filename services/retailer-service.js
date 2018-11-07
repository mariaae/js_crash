const fs = require("fs")
const CircularJSON = require('circular-json')
const dbPath = `${__dirname}/../data.json`
const RetailerModel = require("../models/retailer")

async function findAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)

            const retailers = JSON.parse(file).map(RetailerModel.create)

            resolve(retailers)
        })
    })
}

module.exports = {
  findAll
}
// To do: Add functions
// findAll
// Add
// Del/ Remove
// saveAll

