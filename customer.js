module.exports = class Customer {
  constructor(firstname){
    this.firstname = firstname;
  }

  attendSaleEvent(saleEvent) {
    saleEvent.addCustomer(this);
  }
}