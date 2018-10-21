module.exports = class Retailer {
  constructor(name) {
    this.name = name;
    this.stores = [];
  }

  addStore(store) {
    this.stores.push(store)
  }
}