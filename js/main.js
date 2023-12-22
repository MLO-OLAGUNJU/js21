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

const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
  /*evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px"; */
}
const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello world!";
const navbar = document.querySelector("nav");
navbar.innerHTML = "<h1>Hello</h1> <p>This should align right.</p>";
console.log(navbar);
navbar.style.justifyContent = "space-between";

//DOM FAMILY TREE
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
