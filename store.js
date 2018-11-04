const Retailer = require('./retailer')
const SaleEvent = require('./sale')

module.exports = class Store {
  constructor(retailer, address) {
    this.retailer = retailer;
    this.retailer.addStore(this);
    this.address = address;
    this.saleEvents = []
  }

  addSaleEvent(saleEvent){
    this.saleEvents.push(saleEvent)
  }

  static create({retailerName, address, saleEvents}) {
    const retailer = new Retailer(retailerName)
    const store = new Store(retailer, address)
    store.saleEvents = saleEvents.map( event => Sale.create)

    return store
  }

}