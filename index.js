const Retailer = require('./models/retailer')
const Store = require('./models/store')
const SaleEvent = require('./models/sale')
const Customer = require('./models/customer')

const Database = require('./database')
const express = require('express')
const app = express()
const RetailerService = require('./services/retailer-service')

app.listen(3000, () => console.log("Hello there!"))

// Serve index template
app.get('/', async(req, resp) => {
  resp.sendFile(__dirname + '/index.html')
})

app.get('/retailers', (req, resp) => {
  const data = Database.load("data.json")
  resp.send(RetailerService.findAll())
})



// Add Routes:
// /retailers => All Retailers
// /retailer/:id => A Retailer
// /retailer/:id/stores => All Stores
// /retailer/:id/stores/:id => A store
// /retailer/:id/stores/:id/sales => All sale events
// /retailer/:id/stores/:id/sales/:id => A sale event
// /retailer/:id/stores/:id/sales/:id/customers => Customers attending sale
// /retailer/:id/stores/:id/sales/:id/customers/:id => Specific customer
// /customers => All customers

// Save & Load DB Synchronously
// Save to DB
// Database.save(cos)

// Load DB
// const data = Database.load("data.json")

// Save & Load DB Asynchronously

// async function main() {
//   const retailer = await RetailerService.findAll()
// }

// console.log(cos)

