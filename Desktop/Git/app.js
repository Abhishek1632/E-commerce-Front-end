const a = document.getElementsByTagName("input")[0];
const b = document.getElementsByTagName("input")[1];

const add = document.querySelector("#add");
const multiply = document.querySelector("#multiply");
const result = document.querySelector(".result");

switch  (opertion) {
  case "add":
   resultBox.innerHTML  = parseInt(a.value)  + (parseInt(b.value);
break
case  "multiply":

 resultBox.innerHTML  = parseInt(a.value)  *   (parseInt(b.value);

break
default:
resultBox.innerHTML = "Not a valid opertion"


};


// const product = () => {
//   const result = parseInt(a.value) * parseInt(b.value);
//   resultBox.innerHTML = result;
// };

const calculate = (event, operation) => {
//     console.log("adding");
//   } else  if (operation == "add") {
//  if (opertion == "multiply") {
//     console.log("multiply");
//   }
// };

if (operation == "add") {
  console.log("adding");
} else if (operation == "multiply") {
  console.log("multiply");
}
add.addEventListener("click", (Event) => {
  calculate(Event, "add");
});

multiply.addEventListener("click", (Event) => {
  calculate(Event, "multiply");
});

