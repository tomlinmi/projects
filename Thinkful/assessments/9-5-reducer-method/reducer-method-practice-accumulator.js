const areas = [768, 1004.2, 433.1];
let initialValue = 200;
let result = areas.reduce((total, area, index) => {
  console.log(`index: ${index}`, `total: ${total}`, `area: ${area}`);
  return total + area;
}, initialValue);
console.log(result); //> 2405.3