const Retailer = require('./retailer')
const Store = require('./store')
const SaleEvent = require('./sale')
const Customer = require('./customer')
const Database = require('./database')




// Create a Store
const hundm = new Retailer("H & M")

// Create locations
const hundm_alexa = new Store(hundm, "Alexa Berlin")
const hundm_ring_center = new Store(hundm, "Ring-Center Berlin")

// Create a sale event
const sale_30 = new SaleEvent(hundm_alexa, "Clothing", "30%")

// Create a customer
const karl = new Customer("Karl")

// // Make the customer attend the sale event
karl.attendSaleEvent(sale_30)

Database.save(hundm)



