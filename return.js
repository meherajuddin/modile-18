// function add(number1, number2) {
//   console.log(number1, number2);
//   var sum = number1 + number2;
//   console.log(sum);
//   return;
// }
// // add(60, 20);
// var total = add(50, 30);
// console.log("total", total);

// function bringSingara(money) {
//   var singaraprice = 10;
//   var quantity = money / singaraprice;
//   return quantity;
// }

// var singara = bringSingara(50);
// console.log(singara);

function getTotal(assingnment1, assingnment2, assingnment3) {
  const total = assingnment1 + assingnment2 + assingnment3;
  const Parameters = total / 3;
  return Parameters;
}
const assingnment1Marks = 60;
const assingnment2Marks = 50;
const assingnment3Marks = 20;
const getTotalmarks = getTotal(
  assingnment1Marks,
  assingnment2Marks,
  assingnment3Marks
);
console.log("parlament", getTotalmarks);
