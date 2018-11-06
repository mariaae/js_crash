const fs = require('fs')
const CircularJSON = require('circular-json')

module.exports = {
  save(file, data) {
    fs.writeFileSync("data.json", CircularJSON.stringify(file, data))
  },

  load(file) {
    return new Promise(
      (resolve, reject) => {
        fs.readFile(file, 'utf8', (error, contents) => {
          if (error) return reject(error)

          resolve(CircularJSON.parse(contents))

        })
      }
    )
    // return CircularJSON.parse(fs.readFileSync("data.json"))
  }
}