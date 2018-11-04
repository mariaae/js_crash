module.exports = class Customer {
  constructor(firstname){
    this.firstname = firstname;
  }

  attendSaleEvent(saleEvent) {
    saleEvent.addCustomer(this);
  }

  static create(firstname) {
    return new Customer(firstname)
  }
}