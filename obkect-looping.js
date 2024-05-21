var shoppingItems = ["books", "sunglass", "keyboard", "mouse", "pen", "shoes"];
var friendsAge = [16, 19, 20, 19, 18, 17];
var friendsAge = {
  nirob: 16,
  meheraj: 19,
  aub: 20,
  apnan: 19,
  arif: 18,
  bijoi: 17,
};

var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 12,
  shoes: 2,
};
const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);
for (let i = 0; i < keys.length; i++) {
  var propertiesName = keys[1];
  var propertiesValue = shoppingCart[propertiesName];
  //   console.log(propertiesName, propertiesValue);
}
// for  in loop
for (var propertiesName in shoppingCart) {
  const values = shoppingCart[propertiesName];
  console.log(propertiesName, values);
}
