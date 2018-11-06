# js_crash

## Classes
- Retailer
- Store
- Sale Event
- Customer

## Logic
- Retailer has many stores
- Store has many sale events
- Sale Event has many customers

## Example

# Create a Retailer
const cos = new Retailer("COS")

# Create Stores
const cos_am_hackescher_markt = new Store(cos, "Hackescher Markt")
const cos_friedrichstrasse = new Store(cos, "Friedrichstraße")

# Create a sale event
const sale_30 = new SaleEvent(cos_am_hackescher_markt, "Clothing", "30%")
const sale_50 = new SaleEvent(cos_friedrichstrasse, "Accessories", "50%")

# Create customers
const karl = new Customer("Karl")
const maria = new Customer("Maria")

# Customers attend the sale event
karl.attendSaleEvent(sale_30)
maria.attendSaleEvent(sale_50)