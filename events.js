let country = "USA";
let continent = "North America";
let population = 300;
console.log(
  `${country} is located in ${continent} and has a poplulation of ${population} million people.`,
);

let x, y;
y = 10;
x = y = 25;

const submitBtn = document.querySelector("#submit-button");
submitBtn.addEventListener("click", function () {
  confirm("clicked!");
});
