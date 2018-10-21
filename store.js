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

}