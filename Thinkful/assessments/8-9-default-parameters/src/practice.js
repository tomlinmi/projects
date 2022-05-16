
const product =
{
  name: "Slip Dress",
   priceInCents: 8800,
    availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
  }


  function getPriceInDollars(product=0) {
    const {priceInCents=0} = product
    return "$" + (priceInCents / 100).toFixed(2);
  }
  getPriceInDollars(product)
  console.log(getPriceInDollars(product));


  // `size` is a number between 0 and 16.
  function checkIfSizeIsAvailable(product=0, size=[10]) {
    const {availableSizes=[]}=product
    let sizes = availableSizes;
    for (let i = 0; i < sizes.length; i++) {
      if (sizes[i] === size) {
        return true;
      }
    }
  
    return false;
  }
checkIfSizeIsAvailable(product, 17)
console.log(checkIfSizeIsAvailable(product, 17))
