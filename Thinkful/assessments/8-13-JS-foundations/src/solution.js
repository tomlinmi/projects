/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products, name, size) {
  for (let i in products) {
      const product = products[i];
      if (product.name !== name) {
        return null;
      } else {
          for (let j in product.availableSizes) {
              if (product.availableSizes[j] === size) {
                  return product;
              }
           }
         }
  }
}

/* 



Follow these steps:

if there is no cart, add cart object with product info and quantity of 1.

//if called w/ cart, add item from product to cart. //let item = cart[name];

f item name (from product) matches item in cart (cart[name]) add 1 to quantity.\ */


function addProductToCart(product, cart) {
  const {name, priceInCents} = product;
  if (!cart) { 
      const cart = {};
      //let item = cart[name];
      cart[name] = {};
      cart[name].priceInCents = priceInCents;
      cart[name].quantity = 1; 
      return cart;
    }
    cart[name] = {};
  cart[name].priceInCents = priceInCents;
  if (name == Object.keys(cart)) {
    cart[name].quantity =  2;
    return cart;
  }
  cart[name].quantity = 1;
  return cart;
}


function calculateTotal(cart=0) {
  let total = 0;
  for(let cartItem in cart){
    const itemName = cart[cartItem];
    const priceInCents = itemName.priceInCents;
    const quantity = itemName.quantity;
    
    total += ((itemName.priceInCents )*(itemName.quantity))
  }
    return total;
}

function printReceipt(cart) {
  //finds the total cost of the cart, if total cost = 0 the cart is empty return null.
  
const total = calculateTotal(cart); 
  if (!total){
return null}
 
  let str = "";
  // Looping through cart 
 for (let product in cart) { 
   //destructure quantity, priceInCent from cart[product]
        const { quantity, priceInCents } = cart[product];
   const priceInDollars = printablePrice(quantity*priceInCents)
   str += `${quantity}x${product} - ${priceInDollars}\n`;
 }
    // if (str.length === 0) return null;
// using the helper function
  return  str + `Total: ${printablePrice(total)}`;
}



module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};