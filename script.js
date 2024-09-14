let icon = document.querySelector("#icon");
// let submit1 = document.querySelector(".submit");
const submit = document.querySelector(".submit1");

let drop1 = document.querySelector(".drop1");
let drop2 = document.querySelector(".drop2");

icon.addEventListener("click", () => {
  let temp = drop1.selectedIndex;
  drop1.selectedIndex = drop2.selectedIndex;
  drop2.selectedIndex = temp;
});

// drop1.addEventListener("click", () => {
//   submit.innerText = "submit";
// });
// drop2.addEventListener("click", () => {
//   submit.innerText = "submit";
// });

// submit1.addEventListener("click", () => {
//   console.log("suziee hello");
//   if (drop1.selectedIndex === drop2.selectedIndex) {
//     submit.innerText = "can not enter same station";
//   }
// });
submit.addEventListener("click", () => {
//   var select1 = document.querySelector(".drop1");
//   var select2 = document.querySelector(".drop2");

  if (drop1.value === "" || drop2.value === "") {
    alert("Please select an option before submitting.");
    event.preventDefault(); // Prevent form from submitting
  }
  // if (drop2.value === "") {
  //   alert("Please select an option before submitting.");
  //   event.preventDefault(); // Prevent form from submitting
  // }
});
