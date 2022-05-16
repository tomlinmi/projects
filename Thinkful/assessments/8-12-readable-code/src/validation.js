const product ={
    name: "Slip Dress",
    priceInCents: 8800,
    availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
  }

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
 console.log(result);
}  


function moreThanThreeProducts(products) {
 return products.length > 3;
}

function checkForSizeByName(products, name, size) {
   let product = null;
 if (!products) return "No Products available.";
 for (let i = 0; i < products.length; i++) {
   const product = products[i];
   for (let j=0; j<product.availableSizes.length; j++){
     const size = product.availableSizes[j];
     if (product.name === name){
             }
          return product.availableSizes.includes(size);
   }

   }
 }
