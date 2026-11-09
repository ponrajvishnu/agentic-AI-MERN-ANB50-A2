# Price & Discount Calculator — JavaScript Fundamentals

**Phase 2 · JavaScript — JS Core, DOM, Async & APIs**
**Assignment No. 2**

A price and discount calculator built with pure JavaScript (no DOM, no arrays). It covers variables, operators, conditionals, functions and scope from Sessions 12 to 15.

## Features

- Applies a percentage discount to a product's base price
- Calculates tax on the discounted price
- Computes the final payable price
- Decides shipping: free for orders of Rs.500 or more, otherwise Rs.49
- Converts a stock status code into a readable message
- Prints a full price summary to the console

## Functions

| Function                                      | Description                                                  |
| --------------------------------------------- | ------------------------------------------------------------ |
| `calculateDiscountedPrice(price, discount)`   | Returns the price after the discount percentage is applied   |
| `calculateTax(price, taxRate)`                | Returns the tax amount (`taxRate` % of `price`)              |
| `calculateFinalPrice(price, discount, taxRate)` | Returns the discounted price plus tax                      |
| `isFreeShipping(finalPrice)`                  | Returns `'Free Shipping'` if `finalPrice >= 500`, else `'Shipping: Rs.49'` |
| `getStockMessage(status)`                     | Returns `'In Stock'`, `'Limited Stock'` or `'Out of Stock'` (uses `switch`) |
