/* function takes in an array of products and calculates the total. If discountPercentage is included in the options parameter, it will apply a discount. It will then add salesTax to the total.*/
//updated function signature to include defaults for product array, and discount can be blank object and salesTaxes is default value.
function calculateTotal(products=[], { discountPercentage, salesTax=0.0825 }={}) {
    let result = 0;
    for (let i = 0; i < products.length; i++) {
      const { priceInCents, quantity } = products[i];
      result += priceInCents * quantity;
    }
  
    if (discountPercentage) result *= 1 - discountPercentage;
    return result * (1 + salesTax);
  }
  
  // Inputs
  const products = [
    {
      name: "Black Longline T-Shirt",
      priceInCents: 1500,
      size: "M",
      quantity: 2,
    },
    {
      name: "Light Wash Stretch Skinny Jeans",
      priceInCents: 6000,
      size: 32,
      quantity: 1,
    },
  ];
  const options = { discountPercentage: 0.1, salesTax: 0.0825 };
  
  // Function call
  calculateTotal(products, options); //> 8768.25

  console.log(calculateTotal(products, options));
  console.log(calculateTotal(products));
  console.log(calculateTotal());