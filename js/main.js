// DOM - Document Object Model
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view1");
console.log(view2);
view1.style.display = "none";
view2.style.display = "flex";

const views = document.getElementsByClassName("view");
console.log(views);
