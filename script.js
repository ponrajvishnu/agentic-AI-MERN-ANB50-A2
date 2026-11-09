// Price & Discount Calculator

// Product Variables
let productName     ="Wireless Headphone";
let basePrice       = 5000; // Price in Rs.
let discountPrecent = 20; // %
let taxRate         = 18; // %
let stock           = "limited"; // 'in_stock' | 'limited' | 'out_of_stock'

// returns the discount price from price and discount precentage
function discountPrecentageAmount(basePrice, discountPercent) {
    return (basePrice * discountPercent / 100);
}

// returns the price after applying the discount percentage.
function calculateDiscountedPrice(basePrice,discountPrecent) {
    return basePrice - (basePrice * discountPrecent / 100);
}

// returns the tax amount (taxRate % of price).
function calculateTax(price, taxRate) {
    return (price * taxRate / 100);
}


// returns the final price: discounted price plus tax amount.
function calculateFinalPrice(price, discount, taxRate) {
    let discountPrice = calculateDiscountedPrice(price, discount);
    let taxAmt = calculateTax(discountPrice, taxRate);

    return discountPrice + taxAmt;
}


// returns 'FreeShipping' if finalPrice >= 500, otherwise returns 'Shipping: Rs.49'.
function isFreeShipping(finalPrice) {
    if (finalPrice >= 500) {
        return "Free Shipping";
    } else {
        return "Shipping: Rs.49";
    }
}

// returns 'In Stock', 'Limited Stock', or 'Out of Stock' based on the status string.
function getStockMessage(status) {
    switch(status) {
        case "in_stock":
            return "In Stock";
        case "limited":
            return "Limited Stock";
        case "out_of_stock":
            return "Out of Stock";
        default:
            return "Product Unavailable";
    }
}

const discountedPrice = calculateDiscountedPrice(basePrice, discountPrecent);

const taxAmount = calculateTax(discountedPrice, taxRate);

const finalPrice = calculateFinalPrice(basePrice, discountPrecent, taxRate);

const shippingStatus = isFreeShipping(finalPrice);

const stockMessage = getStockMessage(stock);

console.log("--------- Product Summary ---------");
console.log(`Product: ${productName}`);
console.log(`Base Price: Rs. ${basePrice}`);
console.log(`Discount: ${discountPrecent}% (Rs. ${discountPrecentageAmount(basePrice, discountPrecent)})`);
console.log(`Discounted Price: Rs. ${discountedPrice}`);
console.log(`Tax Amount: Rs. ${taxAmount} (${taxRate}% of Discounted Price)`);
console.log(`Final Price: Rs. ${finalPrice}`);
console.log(`Shipping Status: ${shippingStatus}`);
console.log(`Stock Status: ${stockMessage}`);
console.log("------------------------------------");
