function sun(num1, num2) {
  const getTotal = num1 + num2;
  const total = getTotal / 2;
  return total;
}
const num11 = 25;
const num22 = 60;
const sun2 = sun(num11, num22);
console.log("dan", sun2);

const color = "red";
if (color === "green") {
  console.log("signal: You can cross the road");
} else if (color === "red") {
  console.log("signal: Can't cross the road");
} else {
  console.log("signal: wait");
}
const colors = "green";
switch (colors) {
  case "green":
    console.log("signal: You can cross the road");
    break;
  case "red":
    console.log("signal: Can't cross the road");
    break;

  default:
    console.log("signal: wait");
    break;
}
