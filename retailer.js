module.exports = class Retailer {
  constructor(name) {
    this.name = name;
    this.stores = [];
  }

  addStore(store) {
    this.stores.push(store)
  }

  mapStores() {
    this.stores.map(store => console.log(store.retailer.name))
  }

  static create(name) {
    return new Retailer(name);
  }
}