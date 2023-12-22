// DOM - Document Object Model
const view1 = document.getElementById("view1");
console.log(view1);

//another way
const view2 = document.querySelector("#view2");
console.log(view2);

//to change styles
view1.style.display = "flex";
view2.style.display = "flex";

const views = document.getElementsByClassName("view");
console.log(views);
const sameViews = document.querySelectorAll(".views");
console.log(sameViews);
