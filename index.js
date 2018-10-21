const Retailer = require('./retailer')
const Store = require('./store')
const SaleEvent = require('./sale')
const Customer = require('./customer')




// Create a Store
var hundm = new Retailer("H & M")

// Create locations
var hundm_alexa = new Store(hundm, "Alexa Berlin")
var hundm_ring_center = new Store(hundm, "Ring-Center Berlin")

// Create a sale event
var sale_30 = new SaleEvent(hundm_alexa, "Clothing", "30%")

// Create a customer
var karl = new Customer("Karl")

// // Make the customer attend the sale event
karl.attendSaleEvent(sale_30)

console.log(hundm.stores[0].saleEvents)




