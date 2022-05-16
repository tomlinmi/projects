products =[ {
  name: "Slip Dress",
  priceInCents: 8800,
  availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
},
{name: "Pants",
priceInCents: 9000,
availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
},

{name: "Blouse",
priceInCents: 500,
availableSizes: [ 0, 2, 4, 6, 8, 12, 16 ]
},

{name: "Mini Dress",
priceInCents: 10000,
availableSizes: [ 0, 2, 4, 6, 8, 12, 16 ]
},

         
];

slkjgfasp0 
function getProductsBySize(products, size) {
const result = [];

for (let i = 0; i < products.length; i++) {
  const product = products[i]
  for (let j = 0; j < product.availableSizes.length; j++){
    if (product.availableSizes[j] === size)
    {result.push(product);
                                            }
  }
}
return result;
}  
console.log(getProductsBySize(products, 10))

function moreThanThreeProducts(products) {
return products.length > 3;
}
console.log(moreThanThreeProducts(products))

function checkForSizeByName(products, name, size) {
// Return false early!!!
let product = null;
if (!products) {
  return false;
}
for (let i = 0; i < products.length; i++) {
  // products[i] needs variable
  if (products[i].name === name) {
    product = products[i];
  }
}

if (product) {
  return product.availableSizes.includes(size);
}
else {
  return false;
}
}
console.log(checkForSizeByName(products, 'Slip Dress', 10))


module.exports = {
getProductsBySize,
moreThanThreeProducts,
checkForSizeByName,
};