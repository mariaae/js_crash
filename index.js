var Retailer = class {
  constructor(name) {
    this.name = name;
    this.stores = [];
  }

  addStore(store) {
    this.stores.push(store)
  }
}

var Store = class {
  constructor(retailer, address) {
    this.retailer = retailer;
    this.retailer.addStore(this);
    this.address = address;
    this.saleEvents = []
  }

  addSaleEvent(saleEvent){
    this.saleEvents.push(saleEvent)
  }

}

var SaleEvent = class {
  constructor(store, category, percentage) {
    this.store = store;
    this.store.addSaleEvent(this);
    this.category = category;
    this.percentage = percentage;
    this.customers = []
  }

  addCustomer(customer) {
    this.customers.push(customer)
  }
}

var Customer = class {
  constructor(firstname){
    this.firstname = firstname;
  }

  attendSaleEvent(saleEvent) {
    saleEvent.addCustomer(this);
  }
}

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





