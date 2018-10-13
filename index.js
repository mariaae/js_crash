var Store = class {
  constructor(name) {
    this.name = name;
    this.locations = [];
  }

  addStoreLocation(location) {
    this.locations.push(location)
  }
}

var Location = class {
  constructor(store, address) {
    this.address = address;
    this.store = store;
    this.saleEvents = []
  }

  addSaleEvent(saleEvent){
      this.saleEvents.push(saleEvent)
  }

}

var SaleEvent = class {
  constructor(location, category, percentage) {
    this.location = location;
    this.category = category;
    this.percentage = percentage;
    this.customers = []
  }

  addCustomerToEvent(customer) {
    this.customers.push(customer)
  }
}

var Customer = class {
  constructor(firstname){
    this.firstname = firstname;
    this.saleEvents = []
  }

  attendsSaleEvent(saleEvent) {
    this.saleEvents.push(saleEvent)
  }
}

// Create a Store
var hundm = new Store("H & M")

// Create locations
var hundm_alexa = new Location(hundm, "Alexa Berlin")
var hundm_ring_center = new Location(hundm, "Ring-Center Berlin")

// Add locations to store
hundm.addStoreLocation(hundm_alexa);
hundm.addStoreLocation(hundm_ring_center);

// Create a sale event
var sale_30 = new SaleEvent(hundm_alexa, "Clothing", "30%")

// Add sale event to store
hundm_alexa.addSaleEvent(sale_30)

// Create a customer
var karl = new Customer("Karl")

// Make the customer attend the sale event
sale_30.addCustomerToEvent(karl)

// Add the sale event to customer
karl.attendsSaleEvent(sale_30)





