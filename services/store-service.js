const fs = require("fs")
const StoreModel = require("../models/store")
const CircularJSON = require('circular-json')
const dbPath = `${__dirname}/../data.json`

async function findAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)

            const stores = JSON.parse(file).map(StoreModel.create)

            resolve(stores)
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

