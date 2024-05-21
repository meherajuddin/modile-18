var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};
// when you know the property name, use dot notation
var penKaunt = shoppingCart.pen;
console.log(penKaunt);
// alternative system
var penKaunt2 = shoppingCart["pen"];

var propertyName = "mouse";
var propertyValue;

var properties = Object.keys(shoppingCart);
var propertyvalues = Object.values(shoppingCart);
console.log(propertyvalues.propertyName);
