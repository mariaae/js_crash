module.exports = class Retailer {
  constructor(name) {
    this.name = name;
    this.stores = [];
  }

  addStore(store) {
    this.stores.push(store)
  }

  static create({name}) {
    return new Retailer(name)
  }
}