/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let itemPrice = 0; 
 for(let cartItem in cart){
   const itemName =cart[cartItem]; //loops key item, cartItem is key
   const quantity =itemName.quantity; //loops value quantity
   const priceInCents =itemName.priceInCents;//loops value price
   itemPrice += (quantity*priceInCents);

   
 } 
  return itemPrice
}

function printCartInventory(cart) {
  let result=[];
 for(let cartItem in cart){
   const itemName = cart[cartItem];//["Gold Round Sunglasses", "Pink Bucket Hat"] cartItem is the key name
   const quantity = itemName.quantity;//["1","2"] 
   JoinedItem =`${quantity}x${cartItem}`
   result.push(JoinedItem);
 }
return result.join("\n");
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
