/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `product`, it is referring to an object. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

// Use a conditional (ternary) operator below... return (conditional expression) ? (expression if true) : (expression if false)
function checkSize(product, size) {
  return product.availableSizes.includes(size)? "We have that size.": "We do not have that size.";
}
  /*let result;
  if (product.availableSizes.includes(size)) {
    result = "We have that size.";
  } else {
    result = "We do not have that size.";
  }

  return result;
}*/

// Use a `switch` statement below.
function newYorkCitySalesPrice(product, city) {
  let tax;
  switch (city){
    case "Amherst":
      tax =1.0875;
      break;
    case "Brooklyn":
    tax = 1.08875;
       break;
    case "Buffalo":
    tax = 1.0875;
       break;
    case "Cheektowaga":
    tax = 1.0875;
       break;
    case "Hempstead":
    tax = 1.08625;
       break;
    case "Jamaica":
    tax = 1.08875;
       break;
    case "Mount Vernon":
    tax = 1.08375;
       break;
    case "New York City":
    tax = 1.08875;
       break;
    case "Staten Island":
    tax = 1.08875;
       break;
    case "White Plains":
    tax = 1.08375;
       break;
    case "Yonkers":
    tax = 1.08875;  
      break;
    default:
      tax = 1.08;
  }
  
  return product.priceInCents*tax;
  
}
  /*if (city === "Amherst") {
    tax = 1.0875;
  } else if (city === "Brooklyn") {
    tax = 1.08875;
  } else if (city === "Buffalo") {
    tax = 1.0875;
  } else if (city === "Cheektowaga") {
    tax = 1.0875;
  } else if (city === "Hempstead") {
    tax = 1.08625;
  } else if (city === "Jamaica") {
    tax = 1.08875;
  } else if (city === "Mount Vernon") {
    tax = 1.08375;
  } else if (city === "New York City") {
    tax = 1.08875;
  } else if (city === "Staten Island") {
    tax = 1.08875;
  } else if (city === "White Plains") {
    tax = 1.08375;
  } else if (city === "Yonkers") {
    tax = 1.08875;
  } else {
    tax = 1.08;
  }

  return product.priceInCents * tax;
}*/

module.exports = {
  checkSize,
  newYorkCitySalesPrice,
};
