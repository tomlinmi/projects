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
  return `${amount}`;
}

function chooseItemByNameAndSize(products, name, size) {
const result =[]
  if (!products){
    return null
      }
    for(let i=0; i<products.length; i++){
      const product = products[i];
      for(let j=0; j<product.availableSizes.length; j++){
        
        if(product.name[i] ===name){
        if(product.availableSizes[j] ===size) {
             result.push(product);
        
        } }       
          else{
            return null;
          }
         }
}

}


function addProductToCart(products) {
  let cart = {}
 for(let i=0; i<products.length; i++){
  
}
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

function printReceipt() {}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
