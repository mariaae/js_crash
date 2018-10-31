module.exports = class SaleEvent {
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

  static create({store, category, percentage}) {
    const sale = new SaleEvent(store, category, percentage)
  }
}