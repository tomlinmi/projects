const discountedPrice = (discount) => {
    return (price) => price * discount;
  }
//calls discountedPrice with value of 10% discount
  const tenPercentDiscount = discountedPrice(0.9);

const finalPriceBed = tenPercentDiscount(200); // 90% of $200
console.log(finalPriceBed)

const finalPricePillow = tenPercentDiscount(52); // 90% of $52
const finalPriceCurtain = tenPercentDiscount(32); // 90% of 32

//modify function to 25% discount rate

/*const twentyFivePercentDiscount = discountedPrice(0.75);
const finalPriceBed = twentyFivePercentDiscount(200); // 75% of $200
const finalPricePillow = twentyFivePercentDiscount(52); // 75% of $52
const finalPriceCurtain = twentyFivePercentDiscount(32); // 75% of 32

*/
  